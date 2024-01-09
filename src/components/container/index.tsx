import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Container = memo(({ children }: IReactProps) => (
  <div className='w-full flex justify-center pb-16'>
    <div className='w-full max-w-[800px] space-y-6'>{children}</div>
  </div>
));
export default Container;
