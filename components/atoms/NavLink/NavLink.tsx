import Link from 'next/link';
import { ReactNode } from 'react';

const NavLink = ({ href = '/', children }: { href?: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a className="text-[#99989D] flex  items-center text-base font-medium hover:text-brand relative group">
        {children}
        <div className="absolute invisible group-hover:visible bottom-1 w-full h-1 border-custom-gradient" />
      </a>
    </Link>
  );
};
export default NavLink;
