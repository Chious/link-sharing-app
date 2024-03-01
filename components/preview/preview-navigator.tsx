import { Button } from 'antd';
import Link from 'next/link';

export default function PreviewNavigatorDesktop() {
  return (
    <nav className='absolute right-0 top-1 box-border flex w-full items-center justify-between rounded-2xl border-8 border-solid border-purple-dark bg-white p-3'>
      <Link href='/user/profile'>
        <Button className=' border border-solid border-purple-dark text-purple-dark'>
          Back to Editor
        </Button>
      </Link>

      <Link href='/preview/1'>
        <Button className='border border-solid border-purple-dark bg-purple-dark text-white'>
          Share Link
        </Button>
      </Link>
    </nav>
  );
}
