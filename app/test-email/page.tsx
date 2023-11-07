"use client";

import axios from "axios";
import EmailTemplate from "../components/EmailTemplate";
import ReactDOMServer from "react-dom/server";
import { useEffect, useState } from "react";
import { IProductField } from "../interface/product";
import { getAllProducts } from "../action";

const Page = () => {
  const [products, setProducts] = useState<IProductField[]>([]);
  const [productSlice, setProductSlice] = useState<Array<Array<IProductField>>>(
    []
  );
  const [tailwindStyle, setTwStyle] = useState<string>("");

  useEffect(() => {
    getAllProducts({ per_page: 9 }).then((res) => setProducts(res?.data));
    axios.get("/output.txt").then((res) => setTwStyle(res.data));
  }, []);

  useEffect(() => {
    let sliceProduct: Array<Array<IProductField>> = [];
    let currentSlice: IProductField[] = [];
    products.forEach((product, index) => {
      currentSlice.push(product);
      if (currentSlice.length === 3) {
        sliceProduct.push(currentSlice);
        currentSlice = [];
      }
    });
    setProductSlice(sliceProduct);
  }, [products]);

  const sendEmail = () => {
    axios.post("/api/contact", {
      template: `<!DOCTYPE html>
      <html lang="en">
           <head>
           <style type='text/css'>
           ${tailwindStyle}
           </style>
           </head>
          <body>
          ${ReactDOMServer.renderToStaticMarkup(
            <EmailTemplate products={productSlice} />
          ).toString()}
          </body>
      </html>`,
    });
  };

  return (
    <div>
      <EmailTemplate products={productSlice} />
      <div className="my-20"></div>
      <button
        onClick={sendEmail}
        className="bg-begonia-gradient px-[24px] py-[10px] font-bold text-white rounded-xl"
      >
        Liên hệ tư vấn
      </button>
    </div>
  );
};

export default Page;
