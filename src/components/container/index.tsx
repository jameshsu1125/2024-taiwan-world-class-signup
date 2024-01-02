import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';

const Container = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[800px]'>{children}</div>
    </div>
  );
});
export default Container;
