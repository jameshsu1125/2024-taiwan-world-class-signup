import { FormEvent, memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import CaptureProvider, { DOMString } from 'lesca-react-capture-button';
import './index.less';
import Container from '@/components/container';
import Section from '@/components/section';
import Group from '@/components/group';
import Input from '@/components/input';
import Select from '@/components/select';
import Textarea from '@/components/textArea';
import Button from '@/components/button';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const a = Object.fromEntries([...formData]);
    console.log(a);
  };

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Container>
          <header />
          <Section className='pt-5'>
            <div className='space-y-5'>
              <h1>2024 Taiwan World Class 複賽</h1>
              <ol>
                <li>酒譜繳交截止日：2024年2月18日 23:59</li>
                <li> 請以中英文填寫酒譜內容，若材料無中文名稱則可填入英文名稱</li>
                <li>酒譜寄出後，頁面彈出『繳交成功』視窗者，即完成酒譜繳交作業</li>
                <li>逾時繳交者，將不再保有參賽資格，亦不另做通知</li>
              </ol>
              <span className='text-red-500'>*表示必填欄位</span>
            </div>
          </Section>
          <form onSubmit={onSubmit}>
            <Section>
              <Group title='代表店家'>
                <Input name='store' placeholder='請輸入店名' />
              </Group>
            </Section>
            <Section>
              <Group title='姓名'>
                <Input placeholder='請輸入中文姓名' />
                <Input placeholder='請輸入英文姓名' />
                <Input placeholder='請輸入暱稱' />
              </Group>
            </Section>
            <Section>
              <Group title='手機'>
                <Input type='tel' placeholder='請輸入手機號碼' />
              </Group>
            </Section>
            <Section>
              <Group title='Email' sub={['若繳交成功，10分鐘內將收到填寫副本，請填寫正確郵件地址']}>
                <Input type='email' placeholder='請輸入電子信箱' />
              </Group>
            </Section>
            <Section>
              <Group title='Diageo 負責業務'>
                <Select list={[]} placeHolder='請選擇Diageo負責業務' />
              </Group>
            </Section>
            <Section>
              <Group title='調酒關卡'>
                <Select list={[]} placeHolder='請選擇繳交調酒關卡' />
              </Group>
            </Section>
            <Section>
              <Group title='參賽調酒名稱'>
                <Input placeholder='請輸入中文調酒名稱' />
                <Input placeholder='請輸入英文調酒名稱' />
              </Group>
            </Section>
            <Section>
              <Group
                title='Facebook 社群競賽貼文連結'
                sub={[
                  '僅Don Julio關卡需填寫，JWBL關卡請填寫無',
                  '貼文需設定公開（分享對象為「所有人」），以主辦單位可核查為準未依指定格式發文者，視為棄權',
                ]}
              >
                <Input placeholder='請輸入網址' />
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
              >
                <Input placeholder='請輸入文字' />
              </Group>
            </Section>
            <Section>
              <Group title='指定基酒 / 使用量(ml)' sub={['提醒：調酒單杯最少需含指定基酒30ml']}>
                <Input placeholder='請輸入基酒中文名稱' />
                <Input placeholder='請輸入基酒英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='材料1 / 使用量(ml)' required={false}>
                <Input placeholder='請輸入材料中文名稱' />
                <Input placeholder='請輸入材料英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='材料2 / 使用量(ml)' required={false}>
                <Input placeholder='請輸入材料中文名稱' />
                <Input placeholder='請輸入材料英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='材料3 / 使用量(ml)' required={false}>
                <Input placeholder='請輸入材料中文名稱' />
                <Input placeholder='請輸入材料英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='材料4 / 使用量(ml)' required={false}>
                <Input placeholder='請輸入材料中文名稱' />
                <Input placeholder='請輸入材料英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='材料5 / 使用量(ml)' required={false}>
                <Input placeholder='請輸入材料中文名稱' />
                <Input placeholder='請輸入材料英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='材料6 / 使用量(ml)' required={false}>
                <Input placeholder='請輸入材料中文名稱' />
                <Input placeholder='請輸入材料英文名稱' />
                <Input placeholder='請輸入使用量(ml)' full={false} />
              </Group>
            </Section>
            <Section>
              <Group title='Garnish' required={false}>
                <Input placeholder='請輸入中文名稱' />
                <Input placeholder='請輸入英文名稱' />
              </Group>
            </Section>
            <Section>
              <Group title='杯具'>
                <Input placeholder='請輸入中文名稱' />
                <Input placeholder='請輸入英文名稱' />
              </Group>
            </Section>
            <Section>
              <Group title='製作方式'>
                <Textarea placeholder='請輸入中文內容，限300字內' />
                <Textarea placeholder='請輸入英文內容，限300字內' />
              </Group>
            </Section>
            <Section>
              <Group title='作品簡介'>
                <Textarea placeholder='請輸入中文內容，限300字內' />
                <Textarea placeholder='請輸入英文內容，限300字內' />
              </Group>
            </Section>
            <Section>
              <Group title='上傳調酒照片'>
                <div className='w-full h-full select-none'>
                  <div className='w-full h-full bg-white flex flex-row justify-start items-center text-secondary'>
                    <CaptureProvider
                      compress={0.8}
                      onCapture={({ image }: { image: string }) => {
                        console.log(image);
                      }}
                      type={DOMString.jpg}
                      maxWidth={1024}
                    >
                      <button
                        type='button'
                        className='px-5 py-1 mr-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-gray-200'
                      >
                        選擇檔案
                      </button>
                    </CaptureProvider>
                    檔案格式：jpg，限10mb內
                  </div>
                </div>
              </Group>
            </Section>
            <Section>
              <Button type='submit'>
                <Button.regular>確認送出</Button.regular>
              </Button>
            </Section>
          </form>
        </Container>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
