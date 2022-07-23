/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';

import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';

import Badge from '../../atoms/Badge/Badge';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';

export default function Footer() {
  return (
    <footer className="bg-primary h-48">
      <div className="mx-pagecontainer py-12">
        <div className="flex">
          <div className="flex justify-between w-2/4">
            <div className="w-2/4 flex flex-col space-y-10">
              <Logo type="white" />
              <div className="flex space-x-3">
                <a>
                  <Image width={20} height={20} src="/icons/icon-facebook.svg" alt="facebook" />
                </a>
                <a>
                  <Image width={20} height={20} src="/icons/icon-youtube.svg" alt="youtube" />
                </a>
                <a>
                  <Image width={20} height={20} src="/icons/icon-twitter.svg" alt="twitter" />
                </a>
                <a>
                  <Image width={20} height={20} src="/icons/icon-pinterest.svg" alt="pinterest" />
                </a>
                <a>
                  <Image width={20} height={20} src="/icons/icon-instagram.svg" alt="instagram" />
                </a>
              </div>
            </div>
            <div className="w-2/4 grid grid-cols-2">
              <a href="/" className="text-white text-sm font-normal">
                About Us
              </a>
              <a href="/" className="text-white text-sm font-normal">
                Careers
              </a>
              <a href="/" className="text-white text-sm font-normal">
                Contact
              </a>
              <a href="/" className="text-white text-sm font-normal">
                Support
              </a>
              <a href="/" className="text-white text-sm font-normal">
                Blog
              </a>
              <a href="/" className="text-white text-sm font-normal">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="w-2/4 flex flex-col space-y-4 items-end">
            <Button>Request Invite</Button>
            <Paragraph className="text-white">© Easybank. All Rights Reserved</Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
}
