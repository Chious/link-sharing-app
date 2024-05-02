'use client';

import { Reorder } from 'framer-motion';
import UserLinkSection from './user-link-section';
import { useUser } from '@/context/user-context';

export const UserLinkSectionGrid = () => {
  const { links, setLinks } = useUser();

  return (
    <Reorder.Group
      axis='y'
      values={links}
      onReorder={setLinks}
      className='h-3/5 overflow-scroll'
    >
      {links?.map((item, index) => (
        <UserLinkSection item={item} key={index} index={index} />
      ))}
    </Reorder.Group>
  );
};
