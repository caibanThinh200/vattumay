"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'react-loading-skeleton/dist/skeleton.css'
import { Inter } from "next/font/google";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import ContactForm from "./components/Form";
import FloatContact from "./components/FloatContact";
import { usePathname, useSearchParams } from "next/navigation";
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
  const params = useSearchParams();
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [paddingTop, setPaddingTop] = useState(80);

  useEffect(() => {
    if (pathname !== "/") {
      setPaddingTop(params.has("has_category_bar") ? 174 : 126);
    } else {
      setPaddingTop(80);
    }
  }, [params, pathname]);

  return (
    <html lang="en">
      <body
        style={{ paddingTop }}
        className={clsx(inter.className, "bg-ghost-white")}
      >
        <Header openContact={openContact} setOpenContact={setOpenContact} />
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
