import { memo, useEffect } from 'react';

type T = {
  placeholder: string;
};

const Textarea = memo(({ placeholder }: T) => {
  useEffect(() => {}, []);
  return (
    <textarea className='w-full border p-3' placeholder={placeholder} maxLength={300} rows={5} />
  );
});
export default Textarea;
