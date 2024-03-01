import icon from '@/assets/images/favicon-32x32.png';
import { Button } from 'antd';
import Image from 'next/image';
import cx from 'classnames';

const optionsList = [
  { value: 'github', label: 'Github', color: '#1A1A1A' },
  { value: 'frontend-mentor', label: 'Frontend Mentor', color: '#FFFFFF' },
  { value: 'twitter', label: 'Twitter', color: '#43B7E9' },
  { value: 'linkedin', label: 'LinkedIn', color: '#2D68FF' },
  { value: 'youtube', label: 'YouTube', color: '#EE3939' },
  { value: 'facebook', label: 'Facebook', color: '#2442AC' },
  { value: 'twitch', label: 'Twitch', color: '#EE3FC8' },
  { value: 'devto', label: 'Dev.to', color: '#333333' },
  { value: 'codewars', label: 'Codewars', color: '#8A1A50' },
  { value: 'freecodecamp', label: 'freeCodeCamp', color: '#302267' },
  { value: 'codepen', label: 'Codepen', color: '#1A1A1A' },
  { value: 'gitlab', label: 'GitLab', color: '#EB4925' },
  { value: 'hashnode', label: 'Hashmode', color: '#0330D1' },
  { value: 'stack-overflow', label: 'Stack Overflow', color: '#EC7100' },
];

interface Props {
  value: string;
}

const CustomizeButton = ({ value }: Props) => {
  const item = optionsList.filter((option) => option.value === value)[0];

  const btnStyle = cx(
    'h-12 flex items-center justify-between',
    item.value === 'frontend-mentor' ? 'text-black' : 'text-white'
  );

  return (
    <Button className={btnStyle} style={{ background: item.color }}>
      <Image
        className='fill-white'
        src={`/icon-${item.value}.svg`}
        alt='icon'
        width='16'
        height='16'
      />
      {item.label}
      <Image
        className='text-white'
        src={`/icon-arrow-right.svg`}
        alt='icon'
        width='16'
        height='16'
      />
    </Button>
  );
};

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
        <CustomizeButton value='github' />
        <CustomizeButton value='stack-overflow' />
      </div>
    </section>
  );
}
