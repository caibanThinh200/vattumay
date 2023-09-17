"use-client";
import clsx from "clsx";
import "./product-description.scss";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { IParameterField, IProductField } from "@/app/interface/product";
import { useEffect, useMemo, useState } from "react";
import { IImageField } from "@/app/interface/category";

interface IProductDescription {
  result?: IProductField;
}

interface IDescriptionProps {
  product?: IProductField;
}

const MaterialDrawing: React.FC<IDescriptionProps> = (props) => {
  return (
    <div className="rounded-xl border border-bright-gray h-[400px] overflow-auto">
      <Image
        className="object-cover w-full"
        src={
          (props?.product?.acf?.material_drawing as IImageField)?.url as string
        }
        width={1200}
        height={600}
        alt={
          (props?.product?.acf?.material_drawing as IImageField)?.alt as string
        }
      />
    </div>
  );
};

const Parameter: React.FC<IDescriptionProps> = (props) => {
  const [selectedParams, setSelectedParam] = useState<IParameterField>();

  useEffect(() => {
    setSelectedParam((props.product?.acf?.parameter as IParameterField[])[0]);
  }, [props.product]);

  return (
    <div>
      <div className="flex gap-5">
        {(props.product?.acf?.parameter as IParameterField[])?.length > 0 &&
          props.product?.acf?.parameter?.map((param) => (
            <div key={param?.code}>
              <button
                onClick={() => setSelectedParam(param)}
                // onClick={handleOpenContact}
                className="text-white bg-begonia-gradient w-full flex justify-center gap-3 rounded-xl py-[10px] px-[24px]"
              >
                {param?.code}
              </button>
            </div>
          ))}
      </div>
      <div className="mt-10 overflow-auto">
        <Image
          className="object-contain w-full h-[300px]"
          width={800}
          height={500}
          src={selectedParams?.image?.url as string}
          alt={selectedParams?.image?.alt as string}
        />
      </div>
    </div>
  );
};

const CombineAll: React.FC<IDescriptionProps> = (props) => {
  return (
    <div className="flex flex-col gap-10">
      <MaterialDrawing {...props} />
      <Parameter {...props} />
    </div>
  );
};

const descriptionTypes: { [x: string]: React.FC<IDescriptionProps> } = {
  material: MaterialDrawing,
  parameter: Parameter,
  all: CombineAll,
};

const ProductDescription: React.FC<IProductDescription> = (props) => {
  const [typeDescription, setTypeDescription] = useState<
    "material" | "parameter" | "all"
  >("material");

  const RenderDescription = useMemo(
    () => descriptionTypes[typeDescription],
    [typeDescription]
  );

  const onChangeDescription = (type: "material" | "parameter" | "all") => {
    setTypeDescription(type);
  };

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
        <Tab.Panels
          key={"detail"}
          className="py-[32px] px-[44px] bg-lotion rounded-b-xl"
        >
          <Tab.Panel key={"detail"} className={"flex flex-col gap-5"}>
            <div className="flex gap-5">
              <div
                onClick={() => onChangeDescription("material")}
                style={{
                  background:
                    typeDescription === "material"
                      ? "rgba(107, 114, 128, 0.60)"
                      : "#fff",
                }}
                className={clsx(
                  "p-[12px] cursor-pointer",
                  typeDescription === "material" &&
                    "bg-gray-gradient rounded-xl text-white"
                )}
              >
                Vật liệu vẽ
              </div>
              <div
                onClick={() => onChangeDescription("all")}
                style={{
                  background:
                    typeDescription === "all"
                      ? "rgba(107, 114, 128, 0.60)"
                      : "#fff",
                }}
                className={clsx(
                  "p-[12px] cursor-pointer",
                  typeDescription === "all" &&
                    "bg-gray-gradient rounded-xl text-white"
                )}
              >
                Tách ra
              </div>
              <div
                onClick={() => onChangeDescription("parameter")}
                style={{
                  background:
                    typeDescription === "parameter"
                      ? "rgba(107, 114, 128, 0.60)"
                      : "#fff",
                }}
                className={clsx(
                  "p-[12px] cursor-pointer",
                  typeDescription === "parameter" &&
                    "bg-gray-gradient rounded-xl text-white"
                )}
              >
                Tham số
              </div>
            </div>
            <RenderDescription product={props.result} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductDescription;
