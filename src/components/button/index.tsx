import { IReactProps } from '@/settings/type';
import { Debug } from '@/settings/type-unity';
import Regular from './regular';
import Modal from './modal';

type TRegularProps = Debug<{
  type?: 'submit' | 'button';
  onClick?: () => void;
}>;

const Button = ({ type, children, onClick }: IReactProps & TRegularProps) => (
  <button className='w-full' type={type} onClick={onClick}>
    {children}
  </button>
);

Button.Regular = Regular;
Button.Modal = Modal;

export default Button;
