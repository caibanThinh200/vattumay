"use-client";
import clsx from "clsx";
import "./product-description.scss";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface IProductDescription {}

const ProductDescription: React.FC<IProductDescription> = (props) => {
  return (
    <div className="bg-white text-[#9CA3AF] rounded-xl">
      <Tab.Group>
        <Tab.List className="flex space-x-1 px-[44px] pt-[24px] border-b border-b-bright-gray">
          <Tab
            key="detail"
            className={({ selected }) =>
              clsx( 
                "w-fit px-5 py-2.5 text-sm font-medium leading-5 outline-none",
                selected
                  ? "bg-begonia-gradient-blur text-begonia border-b border-b-begonia"
                  : ""
              )
            }
          >
            Chi tiết
          </Tab>
          <Tab
            key="detail"
            className={({ selected }) =>
              clsx(
                "w-fit px-5 py-2.5 text-sm font-medium leading-5 outline-none",
                selected
                  ? "bg-begonia-gradient-blur text-begonia border-b border-b-begonia"
                  : ""
              )
            }
          >
            Xem trước mô hình
          </Tab>
        </Tab.List>
        <Tab.Panels key={"detail"} className="py-[32px] px-[44px] bg-lotion rounded-b-xl">
          <Tab.Panel key={"detail"} className={"flex flex-col gap-5"}>
            <div className="flex gap-5">
              <div
                style={{ background: "rgba(107, 114, 128, 0.60)" }}
                className="p-[12px] cursor-pointer text-white bg-gray-gradient rounded-xl"
              >
                Vật liệu vẽ
              </div>
              <div
                style={{ color: "rgba(107, 114, 128, 0.60)" }}
                className="p-[12px] cursor-pointer"
              >
                Tất ra
              </div>
              <div
                style={{ color: "rgba(107, 114, 128, 0.60)" }}
                className="p-[12px] cursor-pointer"
              >
                Tham số
              </div>
            </div>
            <div className="rounded-xl border border-bright-gray">
              <Image
                className="object-cover"
                src={"/image/drawing.png"}
                width={1200}
                height={600}
                alt="Draw"
              />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductDescription;
