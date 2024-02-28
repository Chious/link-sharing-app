import UserNavigatorDesktop from "@/components/user/user-navigator-desktop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" w-screen box-content bg-white-light"
        style={{ height: "98vh" }}
      >
        <UserNavigatorDesktop />
        {children}
      </body>
    </html>
  );
}
