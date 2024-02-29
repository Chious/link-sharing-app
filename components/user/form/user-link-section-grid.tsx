'use client';

import { Reorder } from 'framer-motion';
import { useState } from 'react';
import UserLinkSection from './user-link-section';

export default function UserLinkSectionGrid() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  return (
    <Reorder.Group axis='y' values={items} onReorder={setItems}>
      {items.map((item) => (
        <UserLinkSection item={item} key={item} />
      ))}
    </Reorder.Group>
  );
}
