import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  revert?: boolean;
};

const Modal = memo(({ children, revert }: T) => (
  <div
    className={twMerge(
      'w-full font-noto font-normal text-white py-2 rounded-md hover:bg-gray-200 hover:text-black',
      revert ? 'bg-secondary' : 'bg-primary',
    )}
  >
    {children}
  </div>
));
export default Modal;
