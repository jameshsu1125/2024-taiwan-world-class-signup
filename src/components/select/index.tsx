import { memo, useEffect, useState } from 'react';
import './index.less';
import { twMerge } from 'tailwind-merge';

type T = { list: any[]; placeHolder?: string };

const Select = memo(({ list = [], placeHolder = '請選擇' }: T) => {
  const [def, setDef] = useState<boolean>(false);
  useEffect(() => {}, []);
  return (
    <select
      className={twMerge('w-full border p-3 appearance-none', def ? '' : 'text-secondary')}
      onChange={(e) => {
        if (e.target.value) setDef(true);
        else setDef(false);
      }}
    >
      <option value=''>{placeHolder}</option>
      {list.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
});
export default Select;
