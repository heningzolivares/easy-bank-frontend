import Image from 'next/image';

import Button from '../../atoms/Button/Button';
import Logo from '../../atoms/Logo/Logo';
import NavLink from '../../atoms/NavLink/NavLink';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';

export default function Navbar() {
  return (
    <div className="ml-pagecontainer h-80vh relative">
      <div className="flex flex-col w-2/5  justify-center  h-full space-y-6">
        <Title>Next generation digital banking</Title>
        <Paragraph className=" pr-8">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving. budgeting, nvesting, and much more.
        </Paragraph>
        <Button>Request Invite</Button>
      </div>

      <div className="absolute top-0 right-0">
        <Image src="/bg-intro.svg" height={690} width={800} alt="bg frame" layout="fixed" />
      </div>
      <div className="absolute top-3 right-0">
        <Image src="/image-mockups.png" height={750} width={700} alt="bg frame" layout="fixed" />
      </div>
    </div>
  );
}
