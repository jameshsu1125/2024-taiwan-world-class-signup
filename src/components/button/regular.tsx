import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './regular.less';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  disabled?: boolean;
};

const Regular = memo(({ children, disabled }: T) => (
  <div
    className={twMerge(
      'button-regular',
      disabled ? 'button-regular-disable' : 'button-regular-hover',
    )}
  >
    {children}
  </div>
));
export default Regular;
