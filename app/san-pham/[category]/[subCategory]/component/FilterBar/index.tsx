"use client";

import { CATEGORIES } from "@/app/constant";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

interface IFilterBarProps {}

const FilterBar: React.FC<IFilterBarProps> = (props) => {
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
              {CATEGORIES.map((menuItem, index) => (
                <div
                  // className="relative"
                  key={menuItem.id}
                >
                  <Menu.Button as="div">
                    <div
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      className="py-[16px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer"
                    >
                      <Link href={`/san-pham/${menuItem.id}`}>
                        <span>{menuItem.title}</span>
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8327 7.5L9.99935 13.3333L4.16602 7.5"
                          stroke="#6B7280"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </Menu.Button>
                </div>
              ))}
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default FilterBar;
