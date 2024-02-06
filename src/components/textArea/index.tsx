import { memo } from 'react';

type T = {
  name?: string;
  placeholder: string;
  maxLength?: number | undefined;
  disabled?: boolean;
};

const Textarea = memo(({ name, placeholder, maxLength, disabled }: T) => (
  <textarea
    name={name || `textArea-${placeholder}`}
    className='w-full border p-3'
    placeholder={placeholder}
    maxLength={maxLength}
    rows={5}
    disabled={disabled}
  />
));
export default Textarea;
