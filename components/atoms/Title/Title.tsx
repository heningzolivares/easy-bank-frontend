import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

type TitleType = {
  children: ReactNode;
  variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ children, variant, className }: TitleType) => {
  const classNames = clsx('text-primary');
  if (variant === 'h5') {
    return <h5 className={clsx(classNames, 'text-base font-normal', className)}>{children}</h5>;
  }
  if (variant === 'h4') {
    return <h4 className={clsx(classNames, 'text-2xl font-normal', className)}>{children}</h4>;
  }
  if (variant === 'h3') {
    return <h3 className={clsx(classNames, 'text-3xl font-bold', className)}>{children}</h3>;
  }
  if (variant === 'h2') {
    return <h2 className={clsx(classNames, 'text-4xl font-bold', className)}>{children}</h2>;
  }
  return (
    <h1 className={clsx(classNames, ' text-5xl font-normal leading-11', className)}>{children}</h1>
  );
};

export default Title;
