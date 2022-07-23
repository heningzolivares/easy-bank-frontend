import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ href = '/', type = 'black' }: { href?: string; type?: string }) => {
  return (
    <Link href={href}>
      <a>
        {type === 'black' ? (
          <Image src={'/logo.svg'} width="129" height="20" alt="logo" />
        ) : (
          <Image src={'/logo-white.svg'} width="129" height="20" alt="logo-white" />
        )}
      </a>
    </Link>
  );
};
export default Logo;
