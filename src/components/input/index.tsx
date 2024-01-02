import { InputHTMLAttributes, memo, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type T = {
  placeholder: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  full?: boolean;
};

const Input = memo(({ type = 'text', placeholder, full = true }: T) => {
  useEffect(() => {}, []);
  return (
    <input
      type={type}
      className={twMerge('border p-3', full ? 'w-full' : 'w-1/2')}
      placeholder={placeholder}
    />
  );
});
export default Input;
