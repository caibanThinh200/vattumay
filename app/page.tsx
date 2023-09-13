"use client";

import Banner from "./components/Product/Banner";
import HightLight from "./components/Product/Highlight";
import ListDiscountProduct from "./components/Product/DiscountList";
import Sidebar from "./components/Sidebar";
import List from "./components/Product/List";
import {
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ContactForm from "./components/Form";
import {
  getAllProducts,
  getCategoriesData,
  getSubCategoriesData,
} from "./action";
import { ICategoryField, ISubCategoryField } from "./interface/category";
import { IProductField } from "./interface/product";
import ArchivePagination from "./components/Product/Pagination";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SettingContext } from "./context/setting";

interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { updateBreadcrump } = useContext(SettingContext);
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [productInfo, setProductInfo] = useState<IProductField>({});
  const [categoryData, setCategoryData] = useState<ICategoryField[]>([]);
  const [productData, setProductData] = useState<IProductField[]>([]);
  const [subCategories, setSubCategories] = useState<ISubCategoryField[]>([]);
  const [pageIndex, setPageIndex] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: productData.length,
  });

  useEffect(() => {
    getCategoriesData().then((res) => {
      setCategoryData(res.data);
    });

    getSubCategoriesData({ per_page: 100 }).then((res) => {
      setSubCategories(res.data);
    });

    getAllProducts({
      per_page: 100,
    }).then((res) => {
      setProductData(res.data);
    });

    // updateBreadcrump([]);
  }, []);

  useEffect(() => {
    const page = params.get("page")
      ? parseInt(params.get("page") as string)
      : 0;
    if (page && !isNaN(page)) {
      setPageIndex({
        start: (page - 1) * 40,
        end: page * 40,
      });
    } else {
      router.push(`${pathname}?page=1`);
    }
  }, [params, pathname, router]);

  const handlePurchaseProduct = useCallback(
    (e: MouseEvent<HTMLOrSVGElement>, productItem: IProductField) => {
      e.stopPropagation();
      e.preventDefault();
      setOpenContact(true);
      setProductInfo(productItem);
    },
    [openContact, productInfo]
  );
  
  const subCategoryOrder = [''];

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
          productData={productData.slice(pageIndex.start, pageIndex.end)}
          handlePurchaseProduct={handlePurchaseProduct}
        />
        <ArchivePagination
          total={productData.length}
          // currentPage={1}
          postPerPage={40}
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
