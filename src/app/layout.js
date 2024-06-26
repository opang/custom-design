

import { Inter } from "next/font/google";
import "./globals.css";
import Navbarr from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Custom Printing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} >
      
        <Navbarr/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
