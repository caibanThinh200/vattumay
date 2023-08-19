"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, MouseEvent, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { CATEGORIES, SUB_CATEGORIES } from "@/app/constant";

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const [activeMenu, setActiveMenu] = useState<string | number>("");
  let activeTimeout, unactiveTimeout: any;

  const handleMouseEnter = useCallback(
    (key: string | number) => {
      clearTimeout(unactiveTimeout);
      activeTimeout = setTimeout(() => {
        setActiveMenu(key);
      }, 200);
    },
    [activeTimeout]
  );

  const handleMouseLeave = useCallback(() => {
    unactiveTimeout = setTimeout(() => {
      setActiveMenu("key");
    }, 500);
  }, [unactiveTimeout]);

  return (
    <div className="bg-lotion overflow-hidden z-20 border border-bright-gray rounded-xl sticky top-[100px]">
      <div className="py-[16px] px-[24px] border-b border-bright-gray flex justify-between items-center bg-begonia-gradient text-white">
        <h2 className="font-bold text-xl">Danh mục sản phẩm</h2>
        <Link
          href={"/danh-muc"}
          style={{
            background: "linear-gradient(131deg, #FFBEC7 0%, #C25B69 100%)",
          }}
          className="p-2 rounded-full"
        >
          <Image
            src={"/svg/arrow-narrow-right.svg"}
            width={20}
            height={20}
            alt="arrow"
          />
        </Link>
      </div>
      <div className="px-[24px] relative">
        <Menu>
          {({ open }) => (
            <div>
              {CATEGORIES.map((menuItem, index) => (
                <div
                  onMouseEnter={(e) => handleMouseEnter(menuItem.id)}
                  onMouseLeave={handleMouseLeave}
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
                          d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
                          stroke="#6B7280"
                          className="group-hover:stroke-begonia"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </Menu.Button>
                  <Transition
                    appear
                    show={menuItem.id === activeMenu}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      onMouseEnter={(e) => handleMouseEnter(menuItem.id)}
                      onMouseLeave={handleMouseLeave}
                      // style={{
                      //   background:
                      //     "linear-gradient(131deg, #FFBEC7 0%, #C25B69 100%)",
                      // }}
                      className="bg-begonia-gradient z-100 absolute left-full top-0 inset-0 p-[16px] h-full w-full min-w-[600px] origin-top-right rounded-xl rounded-l-none shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white"
                    >
                      <div className="py-1 grid-cols-2 grid gap-x-10 gap-5">
                        {SUB_CATEGORIES.filter(
                          (item) => item.parentId === menuItem.id
                        ).map((item) => (
                          <Menu.Item key={item.id}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={clsx(
                                  "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                      <div className="h-[260px] w-full mt-5 border rounded-xl border-lotion overflow-hidden">
                        <Image
                          width={530}
                          height={260}
                          className="h-full w-full object-cover"
                          src={menuItem?.url}
                          alt="image"
                        />
                      </div>
                    </Menu.Items>
                  </Transition>
                </div>
              ))}
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
