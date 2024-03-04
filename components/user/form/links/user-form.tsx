import { Button } from 'antd';
import { UserLinkSectionGrid } from './user-link-section-grid';
import { useState } from 'react';

type Items = { platform: string; link: string }[];

export default function UserForm() {
  const [items, setItems] = useState<Items>([]);

  const handleAdd = () => {
    if (items.length < 5) {
      setItems([...items, { platform: '', link: '' }]);
    }
  };

  return (
    <section className='flex h-full grow flex-col items-end bg-white p-6 pb-8 pt-9'>
      <div className='form-main flex h-full w-full flex-col gap-2'>
        <h1>Customize your links</h1>
        <h3>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </h3>
        <Button
          className='h-10 w-full border border-solid border-purple-dark bg-purple-light text-purple-dark'
          onClick={handleAdd}
        >
          Add new link
        </Button>
        <div className='flex h-3/5 flex-col gap-3 overflow-scroll'>
          <UserLinkSectionGrid items={items} setItems={setItems} />
        </div>
        <div className='divider m-3 w-full border border-solid border-white-light' />
        <Button className='w-20'>Save</Button>
      </div>
    </section>
  );
}
