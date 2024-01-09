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
  body?: '';
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
