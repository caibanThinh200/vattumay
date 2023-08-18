"use client";

import { CATEGORIES, SUB_CATEGORIES } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICategoriesProps {
  params: any;
}

const CategoriesPage: React.FC<ICategoriesProps> = ({ params }) => {
  const path = usePathname();

  return (
    <div className="container">
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-col-2 gap-5">
        {SUB_CATEGORIES.filter((sub) => sub.parentId == params?.category).map(
          (category) => (
            <Link
              href={`${path}/${category.id}`}
              key={category.id}
              style={{
                boxShadow: "0px 0px 8px 0px rgba(53, 53, 53, 0.08);",
              }}
              className="rounded-xl overflow-hidden cursor-pointer relative group"
            >
              <div className="absolute w-full h-full left-0 top-0  -z-10 group-hover:z-10 transition-all group-hover:opacity-40 opacity-0 group-hover:bg-begonia-gradient text-white m-auto"></div>
              <div className="absolute text-white font-bold text-[20px] -z-10 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)] group-hover:opacity-100 group-hover:-translate-y-1/2 group-hover:z-10 transition-all duration-100">
                Xem chi tiết
              </div>
              <div className="h-[231px]">
                <Image
                  className="w-full h-full object-cover"
                  src={"/image/product-1.png"}
                  height={231}
                  width={321}
                  alt={category.name}
                />
              </div>
              <div className="p-[16px] text-center">
                <p className="font-bold text-[20px]">{category.name}</p>
                <p className="font-light">6 Product</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
