'use client';

import UserProfileForm from '@/components/user/form/profile/user-form-profile';
import UserPreview from '@/components/user/user-preview';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import UserNavigatorDesktop from '@/components/user/user-navigator-desktop';

export default function UserPage() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      <UserNavigatorDesktop />
      <main
        className=' box-border flex w-full gap-3 p-3'
        style={{ height: '86vh' }}
      >
        <UserPreview />
        <UserProfileForm />
      </main>
    </>
  );
}
