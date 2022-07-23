import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, ...rest }: ButtonType) => {
  return (
    <button
      className=" bg-custom-gradient rounded-4xl  text-white text-base font-bold w-btnwidth h-11"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
