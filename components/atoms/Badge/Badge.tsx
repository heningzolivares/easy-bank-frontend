import { ReactNode } from 'react';

type BadgeType = {
  children: ReactNode;
};
const Badge = ({ children, ...rest }: BadgeType) => {
  return (
    <div
      className="badge-custom-gradient w-20 h-20 rounded-full flex items-center justify-center text-white"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Badge;
