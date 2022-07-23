import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

type TitleType = {
  children: ReactNode;
  variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ children, variant, ...rest }: TitleType) => {
  const className = clsx('text-primary font-bold text-5xl');
  if (variant === 'h3') {
    return (
      <h3 className={clsx(className, 'text-3xl', rest.className)} {...rest}>
        {children}
      </h3>
    );
  }
  if (variant === 'h2') {
    return (
      <h2 className={clsx(className, 'text-4xl', rest.className)} {...rest}>
        {children}
      </h2>
    );
  }
  return (
    <h1 className={className} {...rest}>
      {children}
    </h1>
  );
};

export default Title;
