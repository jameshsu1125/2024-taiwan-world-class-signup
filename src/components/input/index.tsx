import { InputHTMLAttributes, memo } from 'react';
import { twMerge } from 'tailwind-merge';

type T = {
  name?: string;
  placeholder: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  full?: boolean;
  maxLength?: number | undefined;
  disabled?: boolean;
};

const Input = memo(({ name, placeholder, maxLength, disabled, type = 'text', full = true }: T) => (
  <input
    name={name || `input-${placeholder}`}
    type={type}
    className={twMerge('border p-3', full ? 'w-full' : 'w-1/2')}
    placeholder={placeholder}
    maxLength={maxLength}
    disabled={disabled}
  />
));
export default Input;
