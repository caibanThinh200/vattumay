"use client";

import Banner from "./components/Product/Banner";
import HightLight from "./components/Product/Highlight";
import ListDiscountProduct from "./components/Product/DiscountList";
import Sidebar from "./components/Sidebar";
import List from "./components/Product/List";
import { useCallback, useEffect, useState } from "react";
import ContactForm from "./components/Form";
import {
  getAllProducts,
  getCategoriesData,
  getSubCategoriesData,
} from "./action";
import { ICategoryField, ISubCategoryField } from "./interface/category";
import { IProductField } from "./interface/product";
import ArchivePagination from "./components/Product/Pagination";

interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [productInfo, setProductInfo] = useState({});
  const [categoryData, setCategoryData] = useState<ICategoryField[]>([]);
  const [productData, setProductData] = useState<IProductField[]>([]);
  const [subCategories, setSubCategories] = useState<ISubCategoryField[]>([]);

  useEffect(() => {
    getCategoriesData().then((res) => {
      setCategoryData(res.data);
    });

    getSubCategoriesData({ per_page: 100 }).then((res) => {
      setSubCategories(res.data);
    });

    getAllProducts().then((res) => {
      setProductData(res.data);
    });
  }, []);

  const handlePurchaseProduct = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      setOpenContact(true);
      setProductInfo({ test: 1 });
    },
    [openContact, productInfo]
  );

  return (
    <div className="flex gap-10">
      <div className="w-3/12">
        <Sidebar subCategories={subCategories} result={categoryData} />
      </div>
      <div className="w-9/12 flex flex-col gap-[44px]">
        <Banner />
        <HightLight />
        <ListDiscountProduct
          productData={productData?.slice(0, 4)}
          handlePurchaseProduct={handlePurchaseProduct}
        />
        <List
          productData={productData}
          handlePurchaseProduct={handlePurchaseProduct}
        />
        <ArchivePagination
          total={Math.floor(productData.length / 10)}
          // currentPage={1}
          postPerPage={10}
        />
        <ContactForm
          modalOpen={openContact}
          setModalOpen={setOpenContact}
          selectedProduct={productInfo}
        />
      </div>
    </div>
  );
}
