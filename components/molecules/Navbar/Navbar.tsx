import Image from 'next/image';
import Link from 'next/link';

import NavLink from '../../atoms/NavLink/NavLink';

export default function Navbar() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between  bg-white mb-3 mx-pagecontainer h-20">
      <div className="flex flex-wrap w-full items-center justify-between">
        <div className="relative flex justify-between">
          <Link href="/">
            <a>
              <Image src={'/logo.svg'} width="129" height="20" alt="logo" />
            </a>
          </Link>
        </div>

        <div className="flex space-x-5 h-20">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Careers</NavLink>
        </div>
      </div>
    </nav>
  );
}
