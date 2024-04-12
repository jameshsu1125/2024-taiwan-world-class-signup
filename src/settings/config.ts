import { SchemaRequiredGroupType, SchemaRequiredType } from './type';

export const PAGE = {
  home: 'home',
};

export const REST_PATH = {
  save: 'saveData',
};

export const SCHEMA_KEY = {
  storeName: 'storeName',
  userName: 'userName',
  userEnglishName: 'userEnglishName',
  userNickName: 'userNickName',
  tel: 'tel',
  email: 'email',
  diageoStaff: 'diageoStaff',
  bartendingLevel: 'bartendingLevel',
  bartendingName: 'bartendingName',
  bartendingEnglishName: 'bartendingEnglishName',
  facebookURL: 'facebookURL',
  alcoholConcentration: 'alcoholConcentration',
  baseWineName: 'baseWineName',
  baseWineEnglishName: 'baseWineEnglishName',
  baseWineDosage: 'baseWineDosage',
  materialName1: 'materialName1',
  materialEnglishName1: 'materialEnglishName1',
  materialDosage1: 'materialDosage1',
  materialName2: 'materialName2',
  materialEnglishName2: 'materialEnglishName2',
  materialDosage2: 'materialDosage2',
  materialName3: 'materialName3',
  materialEnglishName3: 'materialEnglishName3',
  materialDosage3: 'materialDosage3',
  materialName4: 'materialName4',
  materialEnglishName4: 'materialEnglishName4',
  materialDosage4: 'materialDosage4',
  materialName5: 'materialName5',
  materialEnglishName5: 'materialEnglishName5',
  materialDosage5: 'materialDosage5',
  materialName6: 'materialName6',
  materialEnglishName6: 'materialEnglishName6',
  materialDosage6: 'materialDosage6',
  garnishName: 'garnishName',
  garnishEnglishName: 'garnishEnglishName',
  cupsName: 'cupsName',
  cupsEnglishName: 'cupsEnglishName',
  productionMethod: 'productionMethod',
  productionMethodEnglish: 'productionMethodEnglish',
  introduction: 'introduction',
  introductionEnglish: 'introductionEnglish',
  photo: 'photo',
};

export const SUBMIT_LAST_TIME = '2024-04-15 23:59:59';
// export const SUBMIT_LAST_TIME = '2024-03-15 23:59:59';
export const SUBMIT_LAST_DATE = '2024年5月19日 23:59';

const isLastTime = new Date().getTime() > new Date(SUBMIT_LAST_TIME).getTime();

export const SCHEMA_REQUIRED = isLastTime
  ? [
      {
        name: SCHEMA_KEY.storeName,
        required: SchemaRequiredType.Store,
        group: SchemaRequiredGroupType.Store,
      },
      {
        name: SCHEMA_KEY.userName,
        required: SchemaRequiredType.User,
        group: SchemaRequiredGroupType.User,
      },
      {
        name: SCHEMA_KEY.userEnglishName,
        required: SchemaRequiredType.User,
        group: SchemaRequiredGroupType.User,
      },
      {
        name: SCHEMA_KEY.userNickName,
        required: SchemaRequiredType.User,
        group: SchemaRequiredGroupType.User,
      },
      {
        name: SCHEMA_KEY.tel,
        required: SchemaRequiredType.Tel,
        group: SchemaRequiredGroupType.Tel,
      },
      {
        name: SCHEMA_KEY.email,
        required: SchemaRequiredType.Email,
        group: SchemaRequiredGroupType.Email,
      },
      {
        name: SCHEMA_KEY.diageoStaff,
        required: SchemaRequiredType.DiageoStaff,
        group: SchemaRequiredGroupType.DiageoStaff,
      },
      {
        name: SCHEMA_KEY.bartendingLevel,
        required: SchemaRequiredType.BartendingLevel,
        group: SchemaRequiredGroupType.BartendingLevel,
      },
      {
        name: SCHEMA_KEY.bartendingName,
        required: SchemaRequiredType.Bartending,
        group: SchemaRequiredGroupType.Bartending,
      },
      {
        name: SCHEMA_KEY.bartendingEnglishName,
        required: SchemaRequiredType.Bartending,
        group: SchemaRequiredGroupType.Bartending,
      },
      {
        name: SCHEMA_KEY.facebookURL,
        required: SchemaRequiredType.FacebookURL,
        group: SchemaRequiredGroupType.FacebookURL,
      },
      {
        name: SCHEMA_KEY.alcoholConcentration,
        required: SchemaRequiredType.AlcoholConcentration,
        group: SchemaRequiredGroupType.AlcoholConcentration,
      },
      {
        name: SCHEMA_KEY.baseWineName,
        required: SchemaRequiredType.BaseWine,
        group: SchemaRequiredGroupType.BaseWine,
      },
      {
        name: SCHEMA_KEY.baseWineEnglishName,
        required: SchemaRequiredType.BaseWine,
        group: SchemaRequiredGroupType.BaseWine,
      },
      {
        name: SCHEMA_KEY.baseWineDosage,
        required: SchemaRequiredType.BaseWine,
        group: SchemaRequiredGroupType.BaseWine,
      },
      {
        name: SCHEMA_KEY.cupsName,
        required: SchemaRequiredType.Cups,
        group: SchemaRequiredGroupType.Cups,
      },
      {
        name: SCHEMA_KEY.cupsEnglishName,
        required: SchemaRequiredType.Cups,
        group: SchemaRequiredGroupType.Cups,
      },
      {
        name: SCHEMA_KEY.productionMethod,
        required: SchemaRequiredType.Production,
        group: SchemaRequiredGroupType.Production,
      },
      {
        name: SCHEMA_KEY.productionMethodEnglish,
        required: SchemaRequiredType.Production,
        group: SchemaRequiredGroupType.Production,
      },
      {
        name: SCHEMA_KEY.introduction,
        required: SchemaRequiredType.Introduction,
        group: SchemaRequiredGroupType.Introduction,
      },
      {
        name: SCHEMA_KEY.introductionEnglish,
        required: SchemaRequiredType.Introduction,
        group: SchemaRequiredGroupType.Introduction,
      },
      {
        name: SCHEMA_KEY.photo,
        required: SchemaRequiredType.Photo,
        group: SchemaRequiredGroupType.Photo,
      },
    ]
  : [
      {
        name: SCHEMA_KEY.storeName,
        required: SchemaRequiredType.Store,
        group: SchemaRequiredGroupType.Store,
      },
      {
        name: SCHEMA_KEY.userName,
        required: SchemaRequiredType.User,
        group: SchemaRequiredGroupType.User,
      },
      {
        name: SCHEMA_KEY.userNickName,
        required: SchemaRequiredType.User,
        group: SchemaRequiredGroupType.User,
      },
      {
        name: SCHEMA_KEY.tel,
        required: SchemaRequiredType.Tel,
        group: SchemaRequiredGroupType.Tel,
      },
      {
        name: SCHEMA_KEY.email,
        required: SchemaRequiredType.Email,
        group: SchemaRequiredGroupType.Email,
      },
      {
        name: SCHEMA_KEY.diageoStaff,
        required: SchemaRequiredType.DiageoStaff,
        group: SchemaRequiredGroupType.DiageoStaff,
      },
      {
        name: SCHEMA_KEY.bartendingLevel,
        required: SchemaRequiredType.BartendingLevel,
        group: SchemaRequiredGroupType.BartendingLevel,
      },
      {
        name: SCHEMA_KEY.bartendingName,
        required: SchemaRequiredType.Bartending,
        group: SchemaRequiredGroupType.Bartending,
      },
      {
        name: SCHEMA_KEY.facebookURL,
        required: SchemaRequiredType.FacebookURL,
        group: SchemaRequiredGroupType.FacebookURL,
      },
      {
        name: SCHEMA_KEY.alcoholConcentration,
        required: SchemaRequiredType.AlcoholConcentration,
        group: SchemaRequiredGroupType.AlcoholConcentration,
      },
      {
        name: SCHEMA_KEY.baseWineName,
        required: SchemaRequiredType.BaseWine,
        group: SchemaRequiredGroupType.BaseWine,
      },
      {
        name: SCHEMA_KEY.baseWineDosage,
        required: SchemaRequiredType.BaseWine,
        group: SchemaRequiredGroupType.BaseWine,
      },
      {
        name: SCHEMA_KEY.cupsName,
        required: SchemaRequiredType.Cups,
        group: SchemaRequiredGroupType.Cups,
      },
      {
        name: SCHEMA_KEY.productionMethod,
        required: SchemaRequiredType.Production,
        group: SchemaRequiredGroupType.Production,
      },
      {
        name: SCHEMA_KEY.introduction,
        required: SchemaRequiredType.Introduction,
        group: SchemaRequiredGroupType.Introduction,
      },
      {
        name: SCHEMA_KEY.photo,
        required: SchemaRequiredType.Photo,
        group: SchemaRequiredGroupType.Photo,
      },
    ];

export const DIAGEO_STAFF_LIST = [
  { label: 'Chris Lin', value: 'Chris Lin' },
  { label: 'Max Lee', value: 'Max Lee' },
  { label: 'Vic Lin', value: 'Vic Lin' },
  { label: 'Al Hou', value: 'Al Hou' },
  { label: 'None', value: 'None' },
];

export const BARTENDING_LEVEL_LIST = isLastTime
  ? [
      {
        label: 'Tanqueray No.10: MAKE IT A TEN (款一)',
        value: 'Tanqueray No.10: MAKE IT A TEN (款一)',
      },
      {
        label: 'Tanqueray No.10: MAKE IT A TEN (款二)',
        value: 'Tanqueray No.10: MAKE IT A TEN (款二)',
      },
      { label: 'The Singleton: THE SINGLETON DISCO', value: 'The Singleton: THE SINGLETON DISCO' },
    ]
  : [{ label: 'Don Julio: Fewer, Bigger.', value: 'Don Julio: Fewer, Bigger.' }];

export const SUBMIT_END_TIME = '3024-04-15 23:59:59';
export const SUBMIT_END_DATE = '2024年4月15日 23:59';
export const SUBMIT_PS = isLastTime ? ['表示必填欄位'] : ['表示必填欄位', '英文欄位不需填寫'];
