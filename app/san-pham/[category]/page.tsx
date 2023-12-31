"use client";

import { getAllProducts } from "@/app/action";
import { CATEGORIES, SUB_CATEGORIES } from "@/app/constant";
import { useSettingContext } from "@/app/context/setting";
import { ISubCategoryField } from "@/app/interface/category";
import { IProductField } from "@/app/interface/product";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ICategoriesProps {
  params: any;
}

const CategoriesPage: React.FC<ICategoriesProps> = ({ params }) => {
  const path = usePathname();
  const { updateBreadcrump } = useSettingContext();
  const [subCategories, setSubCategories] = useState<ISubCategoryField[]>([]);
  const [allProduct, setAllProduct] = useState<IProductField[]>([]);

  useEffect(() => {
    getAllProducts({ per_page: 900 }).then((res) => {
      setAllProduct(res?.data);
    });
    if (params?.category) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/sub_category`, {
          params: {
            category: params?.category,
            acf_format: "standard",
          },
        })
        .then((res) => {
          setSubCategories(res.data || []);
        });
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/category/${params?.category}`,
          {
            params: {
              acf_format: "standard",
            },
          }
        )
        .then((res) => {
          updateBreadcrump &&
            updateBreadcrump([
              { href: "/danh-muc", name: "Danh mục sản phẩm" },
              {
                href: `/san-pham/${res.data?.id}`,
                name: res.data?.title?.rendered,
                active: true,
              },
            ]);
        });
    }
  }, [params]);

  return (
    <div className="container">
      {subCategories.length > 0 ? (
        <div className="grid lg:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-3 grid-col-2 gap-5">
          {subCategories.map((category) => (
            <Link
              href={`${path}/${category?.id}`}
              key={category?.acf?.code}
              style={{
                boxShadow: "0px 0px 8px 0px rgba(53, 53, 53, 0.08);",
              }}
              className="rounded-xl overflow-hidden cursor-pointer hover:bg-begonia-gradient relative group"
            >
              <div className="absolute w-full h-full left-0 top-0  -z-10 group-hover:z-10 transition-all group-hover:opacity-40 opacity-0 group-hover:bg-begonia-gradient text-white m-auto"></div>
              <div className="h-[231px] group-hover:p-[16px] rounded-xl transition-all relative">
                <div className="absolute text-white font-bold text-[20px] -z-10 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)] group-hover:opacity-100 group-hover:-translate-y-1/2 group-hover:z-10 transition-all duration-100">
                  Xem chi tiết
                </div>
                <Image
                  className="w-full h-full rounded-xl"
                  src={category?.acf?.image?.url as string}
                  height={300}
                  width={400}
                  alt={
                    category?.acf?.image?.alt ||
                    (category?.title?.rendered as string)
                  }
                />
              </div>
              <div className="p-[16px] bg-lotion z-20 group-hover:bg-inherit text-center group-hover:text-white transition-all">
                <p className="font-bold text-[20px]">
                  {category.title?.rendered}
                </p>
                <p className="font-light">
                  {
                    allProduct.filter(
                      (product) =>
                        product.acf?.sub_category?.ID === category?.id
                    )?.length
                  }{" "}
                  sản phẩm
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex gap-10 justify-center w-full">
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
