import { ActionType, TResponse, TSchema } from '@/settings/type';
import Fetcher from 'lesca-fetcher';
import { useContext, useState } from 'react';
import { REST_PATH } from '../settings/config';
import { Context } from '../settings/constant';

const useSubmit = () => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TResponse | undefined>();

  const fetch = async ({ data }: { data: TSchema }) => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    const respond = (await Fetcher.post(REST_PATH.save, data)) as TResponse;
    setState(respond);
    setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
  };
  return [state, fetch] as const;
};
export default useSubmit;
