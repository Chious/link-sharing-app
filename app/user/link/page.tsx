'use client';

import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import UserForm from '@/components/user/form/links/user-form';
import UserPreview from '@/components/user/user-preview';

export default function UserPageLink() {
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = '/';
      }
    });
  }, []);

  return (
    <main
      className=' box-border flex w-full gap-3 p-3'
      style={{ height: '86vh' }}
    >
      <UserPreview />
      <UserForm />
    </main>
  );
}
