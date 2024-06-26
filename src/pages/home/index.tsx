import Button from '@/components/button';
import Container from '@/components/container';
import Group from '@/components/group';
import Input from '@/components/input';
import LoadingProcess from '@/components/loadingProcess';
import Section from '@/components/section';
import Select from '@/components/select';
import Textarea from '@/components/textArea';
import useSubmit from '@/hooks/useSubmit';
import {
  BARTENDING_LEVEL_LIST,
  DIAGEO_STAFF_LIST,
  SCHEMA_KEY,
  SCHEMA_REQUIRED,
  SUBMIT_END_DATE,
  SUBMIT_END_TIME,
  SUBMIT_LAST_DATE,
  SUBMIT_PS,
} from '@/settings/config';
import { Context } from '@/settings/constant';
import {
  ActionType,
  ModalType,
  SchemaRequiredGroupType,
  TSchema,
  TValidate,
} from '@/settings/type';
import CaptureProvider, { DOMString } from 'lesca-react-capture-button';
import { ValidateEmail, ValidatePhone } from 'lesca-validate';
import { FormEvent, memo, useContext, useEffect, useMemo, useState } from 'react';
import { HomeContext, HomeState, THomeGroups, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const [context, setContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);
  const [respond, setSubmit] = useSubmit();
  const [photo, setPhoto] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const disabled = useMemo(() => new Date().getTime() > new Date(SUBMIT_END_TIME).getTime(), []);
  const isLastTime = true;

  useEffect(() => {
    if (disabled) {
      setContext({
        type: ActionType.Modal,
        state: {
          ...ModalType[4],
          enabled: true,
          onClose: () => {},
        },
      });
    }
  }, [disabled]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append(SCHEMA_KEY.photo, photo);
    const data = [...formData];

    const schema =
      level === BARTENDING_LEVEL_LIST[0].value
        ? SCHEMA_REQUIRED
        : SCHEMA_REQUIRED.filter((req) => req.name !== SCHEMA_KEY.facebookURL);

    const emptyRequired = data.filter(([key, value]) => {
      return schema.some((req) => req.name === key) && value === '';
    });

    if (emptyRequired.length > 0) {
      // some data is empty.
      const groups = emptyRequired.map(
        ([key]) => schema.filter((req) => req.name === key).map((req) => req.required)[0],
      );
      const currentGroup = [...new Set(groups)].reduce((prev, next) => {
        return { ...prev, [next]: true };
      }, {}) as Partial<THomeGroups>;

      setState((S) => ({ ...S, groups: { ...S.groups, ...currentGroup } }));
      const groupName = emptyRequired.map(
        ([key]) => schema.filter((req) => req.name === key).map((req) => req.group)[0],
      );

      const currentGroupName = [...new Set(groupName)].join(', ');
      const message = ModalType[2];
      message.body = `下列欄位未填寫 - ${currentGroupName}`;
      setContext({
        type: ActionType.Modal,
        state: {
          ...message,
          enabled: true,
          onClose: () => {},
        },
      });
    } else {
      // all data is not empty.
      const tel = ValidatePhone(data.filter(([key]) => key === SCHEMA_KEY.tel)[0][1] as string);
      const email = ValidateEmail(data.filter(([key]) => key === SCHEMA_KEY.email)[0][1] as string);

      const validate: TValidate = {
        tel: { name: SCHEMA_KEY.tel, value: tel, group: SchemaRequiredGroupType.Tel },
        email: { name: SCHEMA_KEY.email, value: email, group: SchemaRequiredGroupType.Email },
      };

      const validateError = Object.entries(validate).filter(([, value]) => value.value !== true);
      if (validateError.length > 0) {
        const currentError = validateError.map(([, value]) => value.group).join(', ');
        const message = ModalType[2];
        message.body = `下列欄位格式錯誤 - ${currentError}`;
        setContext({
          type: ActionType.Modal,
          state: {
            ...message,
            enabled: true,
            onClose: () => {},
          },
        });
      } else {
        // all passed
        const currentData = Object.fromEntries(data) as TSchema;
        setContext({
          type: ActionType.Modal,
          state: {
            ...ModalType[0],
            enabled: true,
            onClose: () => {
              setSubmit({ data: currentData });
            },
          },
        });
      }
    }
  };

  useEffect(() => {
    if (respond) {
      if (respond.status_code === 1) {
        setContext({
          type: ActionType.Modal,
          state: {
            ...ModalType[1],
            enabled: true,
            onClose: () => {
              window.location.reload();
            },
          },
        });
      } else {
        const message = ModalType[3];
        message.body = respond.message;
        setContext({
          type: ActionType.Modal,
          state: {
            ...message,
            enabled: true,
            onClose: () => {},
          },
        });
      }
    }
  }, [respond]);

  const endDate = useMemo(() => {
    if (isLastTime) return SUBMIT_LAST_DATE;
    return SUBMIT_END_DATE;
  }, []);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Container>
          <header />
          <Section className='pt-5'>
            <div className='space-y-5'>
              <h1>2024 Taiwan World Class 決賽</h1>
              <ol>
                <li>酒譜繳交截止日：{endDate}</li>
                <li> 請以中英文填寫酒譜內容，若材料無中文名稱則可填入英文名稱</li>
                <li>酒譜寄出後，頁面彈出『繳交成功』視窗者，即完成酒譜繳交作業</li>
                <li>逾時繳交者，將不再保有參賽資格，亦不另做通知</li>
              </ol>
              <div className='flex flex-col'>
                {SUBMIT_PS.map((ps) => (
                  <span key={ps} className='text-red-500'>
                    *{ps}
                  </span>
                ))}
              </div>
            </div>
          </Section>
          <form onSubmit={onSubmit}>
            <Section>
              <Group title='代表店家' error={state.groups.store}>
                <Input name={SCHEMA_KEY.storeName} placeholder='請輸入店名' disabled={disabled} />
              </Group>
            </Section>
            <Section>
              <Group title='姓名' error={state.groups.user}>
                <Input
                  name={SCHEMA_KEY.userName}
                  placeholder='請輸入中文姓名'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.userEnglishName}
                  placeholder='請輸入英文姓名'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.userNickName}
                  placeholder='請輸入暱稱'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='手機' error={state.groups.tel}>
                <Input
                  name={SCHEMA_KEY.tel}
                  type='tel'
                  placeholder='請輸入手機號碼'
                  maxLength={10}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group
                title='Email'
                sub={['若繳交成功，10分鐘內將收到填寫副本，請填寫正確郵件地址']}
                error={state.groups.email}
              >
                <Input
                  name={SCHEMA_KEY.email}
                  type='email'
                  placeholder='請輸入電子信箱'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='Diageo 負責業務' error={state.groups.diageoStaff}>
                <Select
                  name={SCHEMA_KEY.diageoStaff}
                  list={DIAGEO_STAFF_LIST}
                  placeHolder='請選擇Diageo負責業務'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='調酒關卡' error={state.groups.bartendingLevel}>
                <Select
                  name={SCHEMA_KEY.bartendingLevel}
                  list={BARTENDING_LEVEL_LIST}
                  placeHolder='請選擇繳交調酒關卡'
                  disabled={disabled}
                  onChange={(e) => {
                    setLevel(e);
                  }}
                />
              </Group>
            </Section>
            <Section>
              <Group title='參賽調酒名稱' error={state.groups.bartending}>
                <Input
                  name={SCHEMA_KEY.bartendingName}
                  disabled={disabled}
                  placeholder='請輸入中文調酒名稱'
                />
                <Input
                  name={SCHEMA_KEY.bartendingEnglishName}
                  disabled={disabled}
                  placeholder='請輸入英文調酒名稱'
                />
              </Group>
            </Section>
            <Section>
              <Group
                title='酒精濃度(g)'
                sub={[
                  <>
                    飲酒量 X 酒精度數 / 百分比) X 0.79系數=酒精重量
                    <br />
                    (ex. 50ml的Johnnie walker黑牌(40%)酒精濃度為=16g)
                    <br />
                    算法：(50*40/100)*0.79=15.8(無條件進位)
                  </>,
                ]}
                error={state.groups.alcoholConcentration}
              >
                <Input
                  type='number'
                  name={SCHEMA_KEY.alcoholConcentration}
                  placeholder='請輸入文字'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group
                title='指定基酒 / 使用量(ml)'
                sub={['提醒：調酒單杯最少需含指定基酒30ml']}
                error={state.groups.baseWine}
              >
                <Input
                  name={SCHEMA_KEY.baseWineName}
                  placeholder='請輸入基酒中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.baseWineEnglishName}
                  placeholder='請輸入基酒英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.baseWineDosage}
                  placeholder='請輸入使用量(ml)'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='材料1 / 使用量' required={false}>
                <Input
                  name={SCHEMA_KEY.materialName1}
                  placeholder='請輸入材料中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialEnglishName1}
                  placeholder='請輸入材料英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialDosage1}
                  placeholder='請輸入使用量和單位'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='材料2 / 使用量' required={false}>
                <Input
                  name={SCHEMA_KEY.materialName2}
                  placeholder='請輸入材料中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialEnglishName2}
                  placeholder='請輸入材料英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialDosage2}
                  placeholder='請輸入使用量和單位'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='材料3 / 使用量' required={false}>
                <Input
                  name={SCHEMA_KEY.materialName3}
                  placeholder='請輸入材料中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialEnglishName3}
                  placeholder='請輸入材料英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialDosage3}
                  placeholder='請輸入使用量和單位'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='材料4 / 使用量' required={false}>
                <Input
                  name={SCHEMA_KEY.materialName4}
                  placeholder='請輸入材料中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialEnglishName4}
                  placeholder='請輸入材料英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialDosage4}
                  placeholder='請輸入使用量和單位'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='材料5 / 使用量' required={false}>
                <Input
                  name={SCHEMA_KEY.materialName5}
                  placeholder='請輸入材料中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialEnglishName5}
                  placeholder='請輸入材料英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialDosage5}
                  placeholder='請輸入使用量和單位'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='材料6 / 使用量' required={false}>
                <Input
                  name={SCHEMA_KEY.materialName6}
                  placeholder='請輸入材料中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialEnglishName6}
                  placeholder='請輸入材料英文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.materialDosage6}
                  placeholder='請輸入使用量和單位'
                  full={false}
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='Garnish' required={false}>
                <Input
                  name={SCHEMA_KEY.garnishName}
                  placeholder='請輸入中文名稱'
                  disabled={disabled}
                />
                <Input
                  name={SCHEMA_KEY.garnishEnglishName}
                  placeholder='請輸入英文名稱'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='杯具' error={state.groups.cups}>
                <Input name={SCHEMA_KEY.cupsName} placeholder='請輸入中文名稱' />
                <Input name={SCHEMA_KEY.cupsEnglishName} placeholder='請輸入英文名稱' />
              </Group>
            </Section>
            <Section>
              <Group title='製作方式' error={state.groups.production}>
                <Textarea
                  name={SCHEMA_KEY.productionMethod}
                  placeholder='請輸入中文內容，限300字內'
                  maxLength={400}
                  disabled={disabled}
                />
                <Textarea
                  name={SCHEMA_KEY.productionMethodEnglish}
                  placeholder='請輸入英文內容，限300字內'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='作品簡介' error={state.groups.introduction}>
                <Textarea
                  maxLength={400}
                  name={SCHEMA_KEY.introduction}
                  placeholder='請輸入中文內容，限300字內'
                  disabled={disabled}
                />
                <Textarea
                  name={SCHEMA_KEY.introductionEnglish}
                  placeholder='請輸入英文內容，限300字內'
                  disabled={disabled}
                />
              </Group>
            </Section>
            <Section>
              <Group title='上傳調酒照片' error={state.groups.photo}>
                <div className='w-full h-full select-none'>
                  <div className='w-full h-full bg-white flex flex-row justify-start items-center text-secondary'>
                    <CaptureProvider
                      compress={0.8}
                      onCapture={({ image }: { image: string }) => {
                        setPhoto(image);
                      }}
                      type={DOMString.jpg}
                      maxWidth={1024}
                    >
                      <button
                        type='button'
                        className='px-5 py-1 mr-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-gray-200 disabled:bg-secondary disabled:text-gray-200'
                        disabled={disabled}
                      >
                        選擇檔案
                      </button>
                    </CaptureProvider>
                    {photo ? '已選擇一張照片' : '檔案格式：jpg，限10mb內'}
                  </div>
                </div>
              </Group>
            </Section>
            <Section>
              <Button type='submit' disabled={disabled}>
                <Button.Regular>確認送出</Button.Regular>
              </Button>
            </Section>
          </form>
        </Container>
      </HomeContext.Provider>
      {context.loadingProcess?.enabled && <LoadingProcess />}
    </div>
  );
});

export default Home;
