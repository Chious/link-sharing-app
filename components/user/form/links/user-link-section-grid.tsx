'use client';

import { Reorder } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import UserLinkSection from './user-link-section';

interface Props {
  links: { platform: string; link: string }[];
  setLinks: Dispatch<SetStateAction<{ platform: string; link: string }[]>>;
}

export const UserLinkSectionGrid: React.FC<Props> = ({ links, setLinks }) => {
  return (
    <Reorder.Group
      axis='y'
      values={links}
      onReorder={setLinks}
      className='h-3/5 overflow-scroll'
    >
      {links?.map((item, index) => (
        <UserLinkSection
          item={item}
          key={index}
          index={index}
          setItems={setLinks}
          items={links}
        />
      ))}
    </Reorder.Group>
  );
};
