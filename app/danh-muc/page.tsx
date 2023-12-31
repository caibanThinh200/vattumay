"use client";

import { CATEGORIES, SUB_CATEGORIES } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getCategoriesData } from "../action";
import { ICategoryField, ISubCategoryField } from "../interface/category";
import { SettingContext } from "../context/setting";

interface ICategoriesProps {
  params: any;
}

const CategoriesPage: React.FC<ICategoriesProps> = ({ params }) => {
  const settingContext = useContext(SettingContext);
  const [categoryData, setCategoryData] = useState<ICategoryField[]>([]);

  useEffect(() => {
    getCategoriesData().then((res) => {
      setCategoryData(res.data);
    });
  }, []);

  useEffect(() => {
    settingContext.updateBreadcrump &&
      settingContext.updateBreadcrump([
        { href: "/danh-muc", name: "Danh mục sản phẩm", active: true },
      ]);
  }, [categoryData]);

  return (
    <div className="container">
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 grid-col-2 gap-5">
        {categoryData.map((category) => (
          <Link
            href={`/san-pham/${category.id}`}
            key={category.id}
            style={{
              boxShadow: "0px 0px 8px 0px rgba(53, 53, 53, 0.08)",
            }}
            className="rounded-xl overflow-hidden cursor-pointer hover:bg-begonia-gradient relative group"
          >
            <div className="absolute w-full h-full left-0 top-0  -z-10 group-hover:z-10 transition-all group-hover:opacity-40 opacity-0 group-hover:bg-begonia-gradient text-white m-auto"></div>
            <div className="h-[231px] group-hover:p-[16px] rounded-xl transition-all relative">
              <div className="absolute text-white font-bold text-[20px] -z-10 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)] group-hover:opacity-100 group-hover:-translate-y-1/2 group-hover:z-10 transition-all duration-100">
                Xem chi tiết
              </div>
              <Image
                className="w-full h-full object-cover rounded-xl"
                src={category.acf?.image?.url || ""}
                height={231}
                width={321}
                alt={
                  category.acf?.image?.alt ||
                  (category?.title?.rendered as string)
                }
              />
            </div>
            <div className="p-[16px] bg-lotion z-20 group-hover:bg-inherit text-center group-hover:text-white transition-all">
              <p className="font-bold text-[20px]">
                {category.title?.rendered as string}
              </p>
              <p className="font-light">
                {category?.acf?.sub_categories?.length} loại danh mục
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
