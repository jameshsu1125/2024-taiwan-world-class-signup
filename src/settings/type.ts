import { Dispatch, ReactNode } from 'react';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Modal = 'modal',
}

export enum LoadingProcessType {
  Ball = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export type TLoadingProcessState = {
  enabled?: boolean;
  type?: LoadingProcessType;
  body?: string;
};

export const ModalType: { title: string; confirm: string; cancel: string; body: string }[] = [
  {
    title: '是否確認送出？',
    confirm: '確認送出',
    cancel: '返回',
    body: '時間內送出後，系統自動以最後上傳版本爲準',
  },
  {
    title: '您已繳交成功',
    confirm: 'OK',
    cancel: '',
    body: '繳交成功將於10分鐘內收到確認信若無請洽World Class官方粉絲專頁',
  },
  {
    title: '有欄位未填寫',
    confirm: 'OK',
    cancel: '',
    body: '',
  },
  {
    title: '系統訊息',
    confirm: 'OK',
    cancel: '',
    body: '',
  },
  {
    title: '報名截止',
    confirm: '',
    cancel: '',
    body: '酒譜繳交已於2/18截止',
  },
];

export type TModalState = {
  enabled?: boolean;
  onClose: () => void;
} & (typeof ModalType)[0];

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  modal?: TModalState;
}

export interface IAction {
  state: IState | TLoadingProcessState | TModalState;
  type: ActionType;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}

export type TSchema = {
  storeName: string;
  userName: string;
  userEnglishName: string;
  userNickName: string;
  tel: string | number;
  email: string;
  diageoStaff: string;
  bartendingLevel: string;
  bartendingName: string;
  bartendingEnglishName: string;
  facebookURL?: string;
  alcoholConcentration: string | number;
  baseWineName: string;
  baseWineEnglishName: string;
  baseWineDosage: string | number;
  materialName1?: string;
  materialEnglishName1?: string;
  materialDosage1?: string;
  materialName2?: string | number;
  materialEnglishName2?: string;
  materialDosage2?: string | number;
  materialName3?: string | number;
  materialEnglishName3?: string;
  materialDosage3?: string | number;
  materialName4?: string | number;
  materialEnglishName4?: string;
  materialDosage4?: string | number;
  materialName5?: string | number;
  materialEnglishName5?: string;
  materialDosage5?: string | number;
  materialName6?: string | number;
  materialEnglishName6?: string;
  materialDosage6?: string | number;
  garnishName?: string;
  garnishEnglishName?: string;
  cupsName: string;
  cupsEnglishName: string;
  productionMethod: string;
  productionMethodEnglish: string;
  introduction: string;
  introductionEnglish: string;
  photo: string;
};

export enum SchemaRequiredType {
  Store = 'store',
  User = 'user',
  Tel = 'tel',
  Email = 'email',
  DiageoStaff = 'diageoStaff',
  BartendingLevel = 'bartendingLevel',
  Bartending = 'bartending',
  FacebookURL = 'facebookURL',
  AlcoholConcentration = 'alcoholConcentration',
  BaseWine = 'baseWine',
  Cups = 'cups',
  Production = 'production',
  Introduction = 'introduction',
  Photo = 'photo',
}

export enum SchemaRequiredGroupType {
  Store = '代表店家',
  User = '姓名',
  Tel = '手機',
  Email = 'Email',
  DiageoStaff = 'Diageo 負責業務',
  BartendingLevel = '調酒關卡',
  Bartending = '參賽調酒名稱',
  FacebookURL = 'Facebook 社群競賽貼文連結',
  AlcoholConcentration = '酒精濃度(g)',
  BaseWine = '指定基酒 / 使用量(ml)',
  Cups = '杯具',
  Production = '製作方式',
  Introduction = '作品簡介',
  Photo = '上傳調酒照片',
}

export type TResponse = {
  status_code: 0 | 1;
  message: string;
};

export type TValidate = {
  tel: {
    name: string;
    value: boolean;
    group: SchemaRequiredGroupType;
  };
  email: {
    name: string;
    value: boolean;
    group: SchemaRequiredGroupType;
  };
  facebookURL?: {
    name: string;
    value: boolean;
    group: SchemaRequiredGroupType;
  };
};
