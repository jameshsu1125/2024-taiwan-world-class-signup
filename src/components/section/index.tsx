import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & { className?: string };

const Section = memo(({ children, className }: T) => {
  useEffect(() => {}, []);
  return (
    <section className={twMerge('w-full px-5 md:px-10', className || null)}>{children}</section>
  );
});
export default Section;
