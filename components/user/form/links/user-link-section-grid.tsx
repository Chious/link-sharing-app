'use client';

import { Reorder } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import UserLinkSection from './user-link-section';

interface Props {
  items: { platform: string; link: string }[];
  setItems: Dispatch<SetStateAction<{ platform: string; link: string }[]>>;
}

export const UserLinkSectionGrid: React.FC<Props> = ({ items, setItems }) => {
  return (
    <Reorder.Group axis='y' values={items} onReorder={setItems}>
      {items?.map((item, index) => (
        <UserLinkSection
          item={item}
          key={index}
          index={index}
          setItems={setItems}
          items={items}
        />
      ))}
    </Reorder.Group>
  );
};
