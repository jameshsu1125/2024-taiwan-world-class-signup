import { memo, useEffect } from 'react';

type T = {
  name?: string;
  placeholder: string;
};

const Textarea = memo(({ name, placeholder }: T) => {
  useEffect(() => {}, []);
  return (
    <textarea
      name={name || `textArea-${placeholder}`}
      className='w-full border p-3'
      placeholder={placeholder}
      maxLength={300}
      rows={5}
    />
  );
});
export default Textarea;
