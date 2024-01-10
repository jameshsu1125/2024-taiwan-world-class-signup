import { TSchema } from '@/settings/config';
import { createContext, Dispatch, SetStateAction } from 'react';

export const HomeData: TSchema = {
  storeName: '',
  userName: '',
  userEnglishName: '',
  userNickName: '',
  tel: '',
  email: '',
  diageoStaff: '',
  bartendingLevel: '',
  bartendingName: '',
  bartendingEnglishName: '',
  facebookURL: '',
  alcoholConcentration: '',
  baseWineName: '',
  baseWineEnglishName: '',
  baseWineDosage: '',
  cupsName: '',
  cupsEnglishName: '',
  productionMethod: '',
  productionMethodEnglish: '',
  introduction: '',
  introductionEnglish: '',
  photo: '',
};

export type THomeState = { data: TSchema };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = { data: HomeData };
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
