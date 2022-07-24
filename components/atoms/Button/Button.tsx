import clsx from 'clsx';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, ...rest }: ButtonType) => {
  return (
    <button
      {...rest}
      className={clsx(
        'bg-custom-gradient rounded-4xl  text-white text-base font-bold w-btnwidth h-11 disabled:opacity-50',
        rest.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
