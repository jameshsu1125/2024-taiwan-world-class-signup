import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext } from 'react';
import Button from '../button';
import './index.less';

const Modal = memo(() => {
  const [context, setContext] = useContext(Context);
  const data = context[ActionType.Modal];

  if (!data) return null;

  return (
    <div className='Modal'>
      <div
        className='bg'
        onClick={() => setContext({ type: ActionType.Modal, state: { enabled: false } })}
      />
      <div className='dialog'>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <div className='w-full pt-3 flex flex-row justify-center items-end space-x-4'>
          {data.confirm && (
            <div className='w-1/2'>
              <Button
                onClick={() => {
                  data.onClose?.();
                  setContext({ type: ActionType.Modal, state: { enabled: false } });
                }}
              >
                <Button.Modal>{data.confirm}</Button.Modal>
              </Button>
            </div>
          )}
          {data.cancel && (
            <div className='w-1/2'>
              <Button
                onClick={() => setContext({ type: ActionType.Modal, state: { enabled: false } })}
              >
                <Button.Modal revert>{data.cancel}</Button.Modal>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
export default Modal;
