import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

type ParagraphType = {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, className, ...rest }: ParagraphType) => (
  <p className={clsx('text-sm text-secondary leading-7', className)} {...rest}>
    {children}
  </p>
);

export default Paragraph;
