"use client"

import { useState } from "react";
import RootLayout from "../../layout";
import ProductDescription from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";

interface IDetailProduct {}

const DetailProduct: React.FC<IDetailProduct> = (props) => {
  return (
    <div className="container flex flex-col gap-20">
      <ProductInfo />
      {/* <ProductDescription /> */}
    </div>
  );
};

export default DetailProduct;
