"use client";

import { useCallback, useEffect, useState } from "react";
import RootLayout from "../../../../layout";
import ProductDescription from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";
import ContactForm from "@/app/components/Form";
import { usePathname, useRouter } from "next/navigation";

interface IDetailProduct {
  params: any;
}

const DetailProduct: React.FC<IDetailProduct> = (props) => {
  const router = useRouter();
  const path = usePathname();
  const [contactForm, setContactForm] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (
      props.params?.category &&
      props.params?.subCategory &&
      props.params?.slug
    ) {
      router.push(`${path}?has_category_bar=true`);
    }
  }, [props.params]);

  const handleOpenContact = useCallback(() => {
    setContactForm(true);
    setProductInfo({ test: 1 });
  }, [contactForm, productInfo]);

  return (
    <div className="container flex flex-col gap-20">
      <ProductInfo handleOpenContact={handleOpenContact} />
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
