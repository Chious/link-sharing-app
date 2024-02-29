import logo from '@/assets/images/logo-devlinks-large.svg';
import LinkIcon from '@/assets/images/icon-link.svg';
import ProfileIcon from '@/assets/images/icon-profile-details-header.svg';

import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function UserNavigatorDesktop() {
  return (
    <nav className=' m-3 box-border flex items-center justify-between bg-white p-3'>
      <Image src={logo} alt='logo' />

      <div className='btn-group flex gap-3'>
        <Link href='/user/link'>
          <Button className=' flex items-center justify-center gap-3 p-2 text-gray'>
            <Image src={LinkIcon} alt='link icon' />
            Links
          </Button>
        </Link>

        <Link href='/user/profile'>
          <Button className=' flex items-center justify-center gap-3 p-2 text-gray'>
            <Image src={ProfileIcon} alt='profile icon' />
            Profile Details
          </Button>
        </Link>
      </div>

      <Link href='/preview/1'>
        <Button className=' border border-solid border-purple-dark text-purple-dark'>
          Preview
        </Button>
      </Link>
    </nav>
  );
}
