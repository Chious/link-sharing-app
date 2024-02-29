import Image from 'next/image';
import PhoneIcon from '@/assets/images/illustration-phone-mockup.svg';

export default function UserPreview() {
  return (
    <section className=' flex h-full grow-0 items-center justify-center bg-white p-10'>
      <Image src={PhoneIcon} alt='phone' height={500} />
    </section>
  );
}
