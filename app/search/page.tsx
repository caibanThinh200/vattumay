"use client";

import {
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SettingContext } from "../context/setting";
import { useSearchParams } from "next/navigation";
import { getAllProducts } from "../action";
import { IProductField } from "../interface/product";
import Image from "next/image";
import { IImageField } from "../interface/category";
import ContactForm from "../components/Form";

interface ISearchProps {}

const SearchPage: React.FC<ISearchProps> = (props) => {
  const params = useSearchParams();
  const settingContext = useContext(SettingContext);
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProductField>();
  const [filteredProduct, setFilteredProduct] = useState<IProductField[]>([]);

  useEffect(() => {
    settingContext.updateBreadcrump &&
      settingContext.updateBreadcrump([
        {
          href: `/search?t=${params.get("t")}`,
          name: "Tìm kiếm sản phẩm",
          active: true,
        },
      ]);
  }, [params]);

  useEffect(() => {
    getAllProducts({ per_page: 100, search: params.get("t") }).then((res) => {
      setFilteredProduct(res.data);
    });
  }, [params]);

  const handlePurchaseProduct = useCallback(
    (e: MouseEvent<HTMLOrSVGElement>, productItem: IProductField) => {
      e.stopPropagation();
      e.preventDefault();
      setOpenContact(true);
      setSelectedProduct(productItem);
    },
    [openContact, selectedProduct]
  );

  return (
    <div>
      <div className="my-10">
        <p className="text-[20px] font-bold">
          Tìm kiếm cho &quot;{params.get("t")}&quot;
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {filteredProduct.map((item) => (
          <div
            key={item.id}
            style={{
              boxShadow: "0px 0px 8px 0px rgba(53, 53, 53, 0.08)",
            }}
            onClick={() =>
              window.open(
                `/san-pham/${item?.acf?.sub_category?.acf?.category}/${item?.acf?.sub_category?.acf?.code}/${item?.id}`
              )
            }
            // href={`/san-pham/${item?.acf?.sub_category?.acf?.category}/${item?.acf?.sub_category?.acf?.code}/${item?.acf?.code}`}
            className="rounded-xl group transition-all overflow-hidden flex flex-col relative"
          >
            <div className="h-[231px]">
              <Image
                className="w-full h-full object-cover"
                src={(item.acf?.image as IImageField[])[0]?.url as string}
                alt={(item.acf?.image as IImageField[])[0]?.alt as string}
                height={315}
                width={300}
              />
            </div>
            <div className="p-[14px] group-hover:bg-begonia-gradient gap-3 transition-all group-hover:text-white flex items-center justify-between">
              <p
                style={{ wordBreak: "break-word" }}
                className="w-full font-bold line-clamp-2"
              >
                {item.title?.rendered}
              </p>
              <svg
                className="w-3/12 hidden group-hover:block cursor-pointer"
                onClick={(e) => handlePurchaseProduct(e, item)}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-white transition-all"
                  d="M8.98816 8.98816C8.67559 9.30072 8.5 9.72464 8.5 10.1667V11C8.5 17.9033 14.0967 23.5 21 23.5H21.8333C22.2754 23.5 22.6993 23.3244 23.0118 23.0118C23.3244 22.6993 23.5 22.2754 23.5 21.8333V19.1008C23.5 18.9259 23.445 18.7553 23.3427 18.6134C23.2404 18.4714 23.096 18.3653 22.93 18.31L19.1858 17.0617C18.9956 16.9984 18.7888 17.0059 18.6036 17.0827C18.4184 17.1596 18.2671 17.3006 18.1775 17.48L17.2358 19.3608C15.1954 18.4389 13.5611 16.8046 12.6392 14.7642L14.52 13.8225C14.6994 13.7329 14.8404 13.5816 14.9173 13.3964C14.9941 13.2112 15.0016 13.0044 14.9383 12.8142L13.69 9.07C13.6348 8.90413 13.5287 8.75984 13.387 8.65754C13.2452 8.55525 13.0748 8.50013 12.9 8.5H10.1667C9.72464 8.5 9.30072 8.67559 8.98816 8.98816Z"
                  stroke="url(#paint0_linear_209_5018)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  className="group-hover:stroke-white transition-all"
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="5.5"
                  stroke="url(#paint1_linear_209_5018)"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <ContactForm
        modalOpen={openContact}
        setModalOpen={setOpenContact}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default SearchPage;
