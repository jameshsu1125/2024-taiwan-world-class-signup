import { SCHEMA_REQUIRED } from '@/settings/config';
import { SchemaRequiredType, TSchema } from '@/settings/type';
import { Dispatch, SetStateAction, createContext } from 'react';

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

export type THomeGroups = {
  [key in SchemaRequiredType]: boolean;
};

export const HomeGroups = [...new Set(SCHEMA_REQUIRED.map((item) => item.required))].reduce(
  (prev, next) => {
    return { ...prev, [next]: false };
  },
  {},
) as THomeGroups;

export type THomeState = { data: TSchema; groups: THomeGroups };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = { data: HomeData, groups: HomeGroups };
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
