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
  link: string;
}

export default function CustomizeButton({ value }: Props) {
  const item = optionsList.filter((option) => option.value === value)[0];

  const btnStyle = cx(
    'h-10 w-full flex items-center justify-between',
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
}
