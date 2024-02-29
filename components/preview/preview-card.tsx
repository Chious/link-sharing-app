import icon from '@/assets/images/favicon-32x32.png';
import { Button } from 'antd';
import Image from 'next/image';

export default function PreviewCard() {
  return (
    <section
      className='absolute top-36 flex h-fit w-2/5 flex-col items-center justify-center gap-5 rounded-lg bg-white p-4 pb-10 pt-10 shadow-lg'
      style={{ right: 'calc(50vw - 20%)' }}
    >
      <Image
        src={icon}
        alt='icon'
        height={80}
        className='rounded-full border-2 border-solid border-purple-dark'
      />
      <h1>Ben Wright</h1>
      <h3 className=' text-gray'>ben@example.com</h3>
      <div className='link-group flex w-full flex-col gap-3'>
        <Button className='h-12 bg-black text-white'>Github</Button>
        <Button className='h-12 bg-red text-white'>Youtube</Button>
        <Button className='h-12 bg-blue-700 text-white'>LinkedIn</Button>
      </div>
    </section>
  );
}
