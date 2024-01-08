import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & { className?: string };

const Section = memo(({ children, className }: T) => (
  <section className={twMerge('w-full px-5 md:px-10', className || null)}>{children}</section>
));
export default Section;
