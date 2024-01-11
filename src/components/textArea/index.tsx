import { memo } from 'react';

type T = {
  name?: string;
  placeholder: string;
};

const Textarea = memo(({ name, placeholder }: T) => (
  <textarea
    name={name || `textArea-${placeholder}`}
    className='w-full border p-3'
    placeholder={placeholder}
    maxLength={400}
    rows={5}
  />
));
export default Textarea;
