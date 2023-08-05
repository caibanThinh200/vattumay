"use client";

import { useCallback, useState } from "react";
import RootLayout from "../../layout";
import ProductDescription from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";
import ContactForm from "@/app/components/Form";

interface IDetailProduct {}

const DetailProduct: React.FC<IDetailProduct> = (props) => {
  const [contactForm, setContactForm] = useState(false);
  const [productInfo, setProductInfo] = useState({});

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
