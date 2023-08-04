'use client'

import "./globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import dynamic from "next/dynamic";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-ghost-white pt-[70px]")}>
        <Header />
        <div className="min-h-[50vh] py-10 pt-[34px] container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
