"use client";

import { CATEGORIES } from "@/app/constant";
import { IFilterParamsField, IFilterWidgetField } from "@/app/interface/filter";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, useCallback, useRef, useState } from "react";

interface IFilterBarProps {
  filters?: IFilterWidgetField[];
  params?: IFilterParamsField[];
  filterParams: any;
  setFilterParams: Dispatch<any>;
}

const FilterBar: React.FC<IFilterBarProps> = (props) => {
  const contentRef = useRef<HTMLDivElement[]>([]);
  const [activeKey, setActiveKey] = useState<string>("");

  const handleChangeFilterPanel = (key: string) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  return (
    <div className="bg-lotion z-20 border border-bright-gray rounded-xl sticky top-[100px]">
      <div className="py-[16px] px-[24px] border-b border-bright-gray flex justify-between items-center">
        <h2 className="font-bold text-xl">Lọc sản phẩm</h2>
        <div>
          <p className="text-begonia">Clear all</p>
        </div>
      </div>
      <div className="px-[24px] relative">
        <Menu>
          {({ open }) => (
            <div>
              {(props.filters as IFilterWidgetField[]).map(
                (menuItem, index) => (
                  <div key={menuItem.id}>
                    <Menu.Button as="div">
                      <div
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() =>
                          handleChangeFilterPanel(menuItem?.id as string)
                        }
                        className="py-[16px] border-b border-dashed border-b-bright-gray group cursor-pointer"
                      >
                        <div className="flex justify-between">
                          <p>
                            <span>{menuItem.title?.rendered}</span>
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className={clsx(
                              menuItem?.id === activeKey && "rotate-180",
                              "transition-all"
                            )}
                          >
                            <path
                              d="M15.8327 7.5L9.99935 13.3333L4.16602 7.5"
                              stroke="#6B7280"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          style={{
                            height:
                              activeKey === menuItem.id
                                ? contentRef.current[index]?.scrollHeight
                                : 0,
                            marginTop: activeKey === menuItem.id ? 10 : 0,
                          }}
                          ref={(ref) => {
                            ((contentRef.current as HTMLDivElement[]) || [])[
                              index
                            ] = ref as HTMLDivElement;
                          }}
                          className={clsx(
                            "flex flex-col gap-2 transition-all overflow-hidden"
                          )}
                        >
                          {props.params
                            ?.filter(
                              (params) =>
                                params?.acf?.filter?.ID === menuItem?.id
                            )
                            ?.map((params) => (
                              <p
                                onClick={(e) => {
                                  e.stopPropagation();
                                  props.setFilterParams(params);
                                }}
                                className={clsx(
                                  "transition-all w-fit text-begonia",
                                  params?.id === props.filterParams?.id
                                  //"bg-begonia-gradient text-white p-2 rounded-full px-4"
                                    ? "font-bold"
                                    : "font-base"
                                )}
                                key={params?.id}
                              >
                                {params?.title?.rendered}
                              </p>
                            ))}
                        </div>
                      </div>
                    </Menu.Button>
                  </div>
                )
              )}
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default FilterBar;
