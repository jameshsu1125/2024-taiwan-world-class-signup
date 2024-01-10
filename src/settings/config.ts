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

export const SCHEMA_REQUIRED = [
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
  { name: SCHEMA_KEY.tel, required: SchemaRequiredType.Tel, group: SchemaRequiredGroupType.Tel },
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
];

export const DIAGEO_STAFF_LIST = [
  { label: 'Chris Lin', value: 'Chris Lin' },
  { label: 'Max Lee', value: 'Max Lee' },
  { label: 'Vic Lin', value: 'Vic Lin' },
  { label: 'Al Hou', value: 'Al Hou' },
  { label: 'None', value: 'None' },
];

export const BARTENDING_LEVEL_LIST = [
  { label: 'Don Julio: Classic of Future', value: 'Don Julio: Classic of Future' },
  { label: 'Johnnie Walker Black: One Step Beyon', value: 'Johnnie Walker Black: One Step Beyon' },
];
