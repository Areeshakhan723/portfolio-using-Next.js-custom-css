import "./globals.css";
import {Open_Sans}  from "next/font/google";
import { ReactNode } from "react";
import Navbar from "../app/Component/Navbar"

const openSans = Open_Sans({
  subsets: ['latin'], // Subsets for language support
  weight: ['400', '700'], // Specify font weights
});


// Define the type for children
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children,}:RootLayoutProps) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
