'use client';

import { Button, Input, Select, Space } from 'antd';
import Image from 'next/image';

import LinkIcon from '@/assets/images/icon-link.svg';
import CustomSelect from './CustomSelect';
import { Reorder, useDragControls, useMotionValue } from 'framer-motion';
import { useRaisedShadow } from './use-raised-shadow';

import githubIcon from '@/assets/images/icon-github.svg';

interface Props {
  item: number;
}

const optionsList = [
  { value: 'github', label: 'Github' },
  { value: 'frontend-mentor', label: 'Frontend Mentor' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'twitch', label: 'Twitch' },
  { value: 'devto', label: 'Dev.to' },
  { value: 'codewars', label: 'Codewars' },
  { value: 'freecodecamp', label: 'freeCodeCamp' },
  { value: 'codepen', label: 'Codepen' },
  { value: 'gitlab', label: 'GitLab' },
  { value: 'hashnode', label: 'Hashmode' },
  { value: 'stack-overflow', label: 'Stack Overflow' },
];

const selectOption = optionsList.map((item) => {
  const { value, label } = item;
  const output = {
    value: value,
    label: (
      <div className=' flex flex-row gap-2 p-1'>
        <Image src={`/icon-${value}.svg`} alt='icon' width='16' height='16' />{' '}
        {label}
      </div>
    ),
  };
  return output;
});

export default function UserLinkSection({ item }: Props) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      style={{ boxShadow, y, marginBottom: '10px' }}
    >
      <section className=' flex flex-col gap-3 rounded-lg bg-white-light p-5'>
        <div className='title flex items-center justify-between'>
          <h2
            className='text-gray before:mr-3 before:inline-block before:h-full before:content-dragIcon'
            onPointerDown={(event) => controls.start(event)}
          >
            {`Link # ${item}`}
          </h2>
          <Button className='border-none text-gray'>Remove</Button>
        </div>
        <label htmlFor='platform' className='text-gray'>
          Platform
        </label>
        <Select id='platform' options={selectOption} className='h-10 w-full' />

        <label htmlFor='link' className='text-gray'>
          Link
        </label>
        <Input
          className='h-10'
          id='link'
          placeholder='e.g. https://www/github/com/'
          prefix={<Image src={LinkIcon} alt='link icon' />}
        />
      </section>
    </Reorder.Item>
  );
}
