import Image from 'next/image';
import PhoneIcon from '@/assets/images/illustration-empty.svg';

export default function UserEmpty() {
  return (
    <div className=' m-6 box-border flex flex-col items-center justify-center gap-3 bg-white-light p-6'>
      <Image src={PhoneIcon} alt='phone' height={150} />
      <h1>{`Let's get you started`}</h1>
      <h3 className=' w-4/5 text-center leading-6 text-gray'>{`Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!`}</h3>
    </div>
  );
}
