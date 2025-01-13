import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import Navbar from "../app/Component/Navbar";
import AOSInitializer from "../app/Component/AOSInitializer"; // Import the AOS initializer component

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        <AOSInitializer /> {/* Include the AOSInitializer component here */}
        {children}
      </body>
    </html>
  );
}
