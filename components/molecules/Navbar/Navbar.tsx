import Button from '../../atoms/Button/Button';
import Logo from '../../atoms/Logo/Logo';
import NavLink from '../../atoms/NavLink/NavLink';

export default function Navbar() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between  bg-white mx-pagecontainer h-20">
      <div className="flex flex-wrap w-full items-center justify-between">
        <div className="relative flex justify-between">
          <Logo />
        </div>

        <div className="flex space-x-5 h-20">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Careers</NavLink>
        </div>
        <Button>Request Invite</Button>
      </div>
    </nav>
  );
}
