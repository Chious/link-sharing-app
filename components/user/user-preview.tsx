import Image from 'next/image';
import PhoneIcon from '@/assets/images/illustration-phone-mockup.svg';
import CustomizeButton from './customize-link-button';

export default function UserPreview() {
  return (
    <section className='relative flex h-full grow-0 items-center justify-center bg-white p-10'>
      <Image src={PhoneIcon} alt='phone' height={500} />

      <div className='profile-group absolute flex h-2/3 w-3/5 flex-col items-center justify-center gap-1 bg-white'>
        <Image
          className='relative z-20'
          src='/favicon-32x32.png'
          alt='image'
          width={80}
          height={80}
        />
        <h2
          className='z-10 w-32 text-center'
          style={{ left: 'calc(50% - 4rem)' }}
        >
          First Last
        </h2>
        <h4 className='z-10 w-32 text-center'>user01@example.com</h4>
        <div
          className='link-group flex w-48 flex-col items-center justify-start gap-2 p-5'
          style={{ height: '45%' }}
        >
          <CustomizeButton value='youtube' link='https://www.youtube.com' />
          <CustomizeButton value='youtube' link='https://www.youtube.com' />
          <CustomizeButton value='youtube' link='https://www.youtube.com' />
          <CustomizeButton value='youtube' link='https://www.youtube.com' />
          <CustomizeButton value='youtube' link='https://www.youtube.com' />
        </div>
      </div>
    </section>
  );
}
