import { IReactProps } from '@/settings/type';
import { ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  title: string;
  sub?: ReactNode[];
  error?: boolean;
  required?: boolean;
};

const Group = memo(({ children, title, sub, error = false, required = true }: T) => (
  <div className='py-3'>
    <div className='w-full relative text-2xl flex flex-row justify-between items-baseline'>
      <div>
        {title}
        <sup className='text-red-500'>{required ? '*' : null}</sup>
      </div>
      {error && required ? <div className='text-sm text-red-500'>*此為必填欄位</div> : null}
    </div>
    {sub ? (
      <div className='py-2'>
        {sub.map((item, index) => (
          <div key={`node${index}`} className='text-xs md:text-sm text-gray-500'>
            <span className='text-secondary'>*</span>
            {item}
          </div>
        ))}
      </div>
    ) : null}
    <div
      className={twMerge(
        'flex flex-col space-y-3 py-3',
        // error ? '[&>input]:border-red-500 [&>textarea]:border-red-500' : '',
      )}
    >
      {children}
    </div>
  </div>
));
export default Group;
