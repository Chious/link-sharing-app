import UserNavigatorDesktop from '@/components/user/user-navigator-desktop';
import { UserProvider } from '@/context/user-context';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className=' box-content w-screen bg-white-light'
        style={{ height: '98vh' }}
      >
        <UserProvider>
          <UserNavigatorDesktop />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
