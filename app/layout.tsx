"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Inter } from "next/font/google";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { JSXElementConstructor, ReactElement, useState } from "react";
import ContactForm from "./components/Form";
import FloatContact from "./components/FloatContact";
import { usePathname } from "next/navigation";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children:
    | React.ReactNode
    | ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  const pathname = usePathname();
  const [openContact, setOpenContact] = useState<boolean>(false);

  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-ghost-white pt-[80px]")}>
        <Header openContact={openContact} setOpenContact={setOpenContact} />
        {/* <div className="py-[10px] border border-bright-gray">
          Trang chủ
        </div> */}
        <div className="min-h-[50vh] py-10 pt-[34px] container mx-auto">
          {React.isValidElement(children) &&
            React.cloneElement(children, {
              openContact,
              setOpenContact,
            } as any)}
          <FloatContact />
        </div>

        <ContactForm modalOpen={openContact} setModalOpen={setOpenContact} />
        <Footer />
      </body>
    </html>
  );
}
