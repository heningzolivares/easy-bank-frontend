import type { FC, ReactNode } from 'react';

const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="pt-10 pl-16 pr-12 pb-7 bg-white rounded-lx border border-gray-200 shadow-md flex flex-col">
    {children}
  </div>
);

export default Card;
