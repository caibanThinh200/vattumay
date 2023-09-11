"use client";

import { useCallback, useEffect, useState } from "react";
import RootLayout from "../../../../layout";
import ProductDescription from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";
import ContactForm from "@/app/components/Form";
import { usePathname, useRouter } from "next/navigation";
import {
  getDetailProduct,
  getSingleCategory,
  getSingleSubCategory,
} from "@/app/action";
import { useSettingContext } from "@/app/context/setting";
import { IProductField } from "@/app/interface/product";
import { ICategoryField, ISubCategoryField } from "@/app/interface/category";

interface IDetailProduct {
  params: any;
}

const DetailProduct: React.FC<IDetailProduct> = (props) => {
  const router = useRouter();
  const path = usePathname();
  const { updateBreadcrump } = useSettingContext();
  const [contactForm, setContactForm] = useState(false);
  const [productInfo, setProductInfo] = useState<IProductField>({});

  useEffect(() => {
    if (
      props.params?.category &&
      props.params?.subCategory &&
      props.params?.slug
    ) {
      router.push(`${path}?has_category_bar=true`);
    }
  }, [props.params]);

  useEffect(() => {
    if (props?.params) {
      getDetailProduct(props?.params?.slug as string).then((res) => {
        setProductInfo(res.data);
      });

      // getSingleCategory(props.params?.category as string).then((category) => {
      //   setCategory(category?.data);
      // })
    }
  }, [props?.params]);

  useEffect(() => {
    updateBreadcrump && updateBreadcrump([
      // {
      //   href: `/san-pham/${category}`,
      //   name: category?.title?.rendered,
      //   active: true,
      // },
      {
        href: `/san-pham/${productInfo?.acf?.sub_category?.acf?.category}/${productInfo?.acf?.sub_category?.acf?.code}`,
        name: productInfo?.acf?.sub_category?.post_title,
      },
      {
        href: `/san-pham/${productInfo?.acf?.sub_category?.id}/${productInfo?.id}`,
        name: productInfo?.title?.rendered,
        active: true
      },
    ]);
  }, [productInfo]);

  const handleOpenContact = useCallback(() => {
    setContactForm(true);
    // setProductInfo({ test: 1 });
  }, [contactForm, productInfo]);

  return (
    <div className="container flex flex-col gap-20">
      <ProductInfo result={productInfo} handleOpenContact={handleOpenContact} />
      <ProductDescription />
      <ContactForm
        modalOpen={contactForm}
        setModalOpen={setContactForm}
        selectedProduct={productInfo}
      />
    </div>
  );
};

export default DetailProduct;
