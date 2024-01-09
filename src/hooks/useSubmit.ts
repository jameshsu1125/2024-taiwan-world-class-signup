import Fetcher from 'lesca-fetcher';
import { useContext, useState } from 'react';
import { REST_PATH } from '../settings/config';
import { Context } from '../settings/constant';
import { ActionType } from '@/settings/type';

export type TResult = { res: boolean; id: number; msg: string } | undefined;

const useSubmit = () => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TResult>();
  const fetch = async () => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    const respond = (await Fetcher.get(REST_PATH.test)) as TResult;
    setState(respond);
    setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
  };
  return [state, fetch] as const;
};
export default useSubmit;
