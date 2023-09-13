"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import "rc-pagination/assets/index.css";
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
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from "next-i18next";
import Setting from "./context/setting";
import axios from "axios";

const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [paddingTop, setPaddingTop] = useState(80);

  const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: "vi",
        autoDisplay: false,
        // layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      (window as any).googleTranslateElementInit = googleTranslateElementInit;

      const sheetScript = document.createElement("script");
      sheetScript.setAttribute(
        "src",
        "https://sbt.0soft.dev/sheet-best-templates.min.js"
      );
    }
  }, []);

  // const handleOnLoad = () => {
  //   let allText = document.body.innerText;
  //   axios
  //     .post(
  //       process.env.NEXT_PUBLIC_TRANSLATE_API_URL as string,
  //       {
  //         q: allText
  //           .split(/\r?\n|\r|\n/g)
  //           .filter((i) => !!i)
  //           .slice(0, 50),
  //       },
  //       {
  //         params: {
  //           key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  //           target: "en",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // console.log(res.data);
  //       const translatedData = res.data?.data?.translations?.map(
  //         (i) => i.translatedText
  //       );
  //       // document.body.innerText = translatedData?.join(/\r?\n|\r|\n/g)
  //     });
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleOnLoad();
  //   }, 1000);
  // }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setPaddingTop(params.has("has_category_bar") ? 174 : 126);
    } else {
      setPaddingTop(80);
    }
  }, [params, pathname]);

  return (
    <html>
      <body
        style={{ paddingTop }}
        className={clsx(inter.className, "bg-ghost-white")}
      >
        <div id="google_translate_element" className="fixed z-50"></div>
        <Setting>
          <QueryClientProvider client={queryClient}>
            <Header openContact={openContact} setOpenContact={setOpenContact} />
            <div className="min-h-[50vh] py-10 pt-[34px] container mx-auto">
              {React.isValidElement(children) &&
                React.cloneElement(children, {
                  openContact,
                  setOpenContact,
                } as any)}
              <FloatContact />
            </div>

            <ContactForm
              modalOpen={openContact}
              setModalOpen={setOpenContact}
            />
            <Footer />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Setting>
      </body>
    </html>
  );
};

export default RootLayout;
// export default appWithTranslation(RootLayout as any);
