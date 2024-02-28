import PreviewNavigatorDesktop from "@/components/preview/preview-navigator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" w-screen box-content bg-white-light relative"
        style={{ height: "98vh" }}
      >
        <div className="background h-48 w-full bg-purple-dark rounded-b-3xl" />
        <PreviewNavigatorDesktop />
        {children}
      </body>
    </html>
  );
}
