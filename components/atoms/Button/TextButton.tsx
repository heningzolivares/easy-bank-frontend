import clsx from 'clsx';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type TextButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const TextButton = ({ children, ...rest }: TextButtonType) => {
  return (
    <button
      {...rest}
      className={clsx(
        'bg-transparent rounded-4xl text-[#84E1A7] font-bold text-sm  disabled:opacity-50',
        rest.className
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
