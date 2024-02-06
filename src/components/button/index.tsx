import { IReactProps } from '@/settings/type';
import { Debug } from '@/settings/type-unity';
import Modal from './modal';
import Regular from './regular';
import { Children, cloneElement, isValidElement } from 'react';

type TRegularProps = Debug<{
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}>;

const Button = ({ type, children, onClick, disabled }: IReactProps & TRegularProps) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) return cloneElement(child, { ...child.props, disabled });
    return child;
  });

  return (
    <button className='w-full' type={type} onClick={onClick} disabled={disabled}>
      {childrenWithProps}
    </button>
  );
};

Button.Regular = Regular;
Button.Modal = Modal;

export default Button;
