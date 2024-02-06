import { memo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.less';

type T = {
  name?: string;
  list: any[];
  placeHolder?: string;
  onChange?: (e: string) => void;
  disabled?: boolean;
};

const Select = memo(({ name, disabled, onChange, list, placeHolder = '請選擇' }: T) => {
  const [def, setDef] = useState<boolean>(false);

  return (
    <select
      name={name || `select-${placeHolder}`}
      className={twMerge('w-full border p-3 appearance-none', def ? '' : 'text-secondary')}
      onChange={(e) => {
        if (e.target.value) setDef(true);
        else setDef(false);
        onChange?.(e.target.value);
      }}
      disabled={disabled}
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
