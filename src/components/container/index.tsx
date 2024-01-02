import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';

const Container = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);

  return (
    <div className='w-full flex justify-center pb-40'>
      <div className='w-full max-w-[800px] space-y-6'>{children}</div>
    </div>
  );
});
export default Container;
