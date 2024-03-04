'use client';

import UserProfileForm from '@/components/user/form/profile/user-form-profile';
import UserPreview from '@/components/user/user-preview';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';

export default function UserPage() {
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
      <UserProfileForm />
    </main>
  );
}
