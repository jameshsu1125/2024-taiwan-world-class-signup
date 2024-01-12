import { memo } from 'react';

type T = {
  name?: string;
  placeholder: string;
  maxLength?: number | undefined;
};

const Textarea = memo(({ name, placeholder, maxLength }: T) => (
  <textarea
    name={name || `textArea-${placeholder}`}
    className='w-full border p-3'
    placeholder={placeholder}
    maxLength={maxLength}
    rows={5}
  />
));
export default Textarea;
