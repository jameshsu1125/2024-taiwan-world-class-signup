import { IReactProps } from '@/settings/type';
import { ReactNode, memo } from 'react';

type T = IReactProps & {
  title: string;
  sub?: ReactNode[];
  error?: boolean;
};

const Group = memo(({ children, title, sub, error = false }: T) => (
  <div className='py-3'>
    <div className='w-full relative text-2xl flex flex-row justify-between items-baseline'>
      <div>
        {title}
        <sup className='text-red-500'>{error ? '*' : null}</sup>
      </div>
      {error ? <div className='text-sm text-red-500'>*此為必填欄位</div> : null}
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
    <div className='flex flex-col space-y-3 py-3'>{children}</div>
  </div>
));
export default Group;
