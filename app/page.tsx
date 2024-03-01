'use client';

import LoginForm from '@/components/login/login-form';
import Image from 'next/image';
import logo from '@/assets/images/logo-devlinks-large.svg';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <main className='flex min-h-screen flex-col items-center justify-center gap-8'>
        <Image src={logo} alt='logo' />
        <LoginForm />
      </main>
    </SessionProvider>
  );
}
