import { InputHTMLAttributes, memo } from 'react';
import { twMerge } from 'tailwind-merge';

type T = {
  name?: string;
  placeholder: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  full?: boolean;
  maxLength?: number | undefined;
};

const Input = memo(
  ({ name, type = 'text', placeholder, full = true, maxLength = undefined }: T) => (
    <input
      name={name || `input-${placeholder}`}
      type={type}
      className={twMerge('border p-3', full ? 'w-full' : 'w-1/2')}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  ),
);
export default Input;
