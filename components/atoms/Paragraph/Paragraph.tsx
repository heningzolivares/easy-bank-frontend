import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

type ParagraphType = {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, ...rest }: ParagraphType) => (
  <p className=" text-sm text-secondary" {...rest}>
    {children}
  </p>
);

export default Paragraph;
