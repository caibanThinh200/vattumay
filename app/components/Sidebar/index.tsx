"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import {
  Fragment,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ICategoryField, ISubCategoryField } from "@/app/interface/category";
import Skeleton from "react-loading-skeleton";

interface ISidebarProps {
  result: ICategoryField[];
  subCategories: ISubCategoryField[];
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const [activeMenu, setActiveMenu] = useState<string | number>("");
  const activeTimeout: MutableRefObject<NodeJS.Timeout> = useRef(
      setTimeout(() => {})
    ),
    unactiveTimeout: MutableRefObject<NodeJS.Timeout> = useRef(
      setTimeout(() => {})
    );

  const handleMouseLeave = useCallback(() => {
    unactiveTimeout.current = setTimeout(() => {
      setActiveMenu("key");
    }, 500);
  }, [unactiveTimeout]);

  const handleMouseEnter = useCallback(
    (key: string | number) => {
      clearTimeout(unactiveTimeout.current);
      activeTimeout.current = setTimeout(() => {
        setActiveMenu(key);
      }, 200);
    },
    [activeTimeout]
  );

  return (
    <div className="bg-lotion z-20 border border-bright-gray rounded-xl sticky top-[100px]">
      <div className="py-[16px] px-[24px] border-b border-bright-gray flex justify-between items-center bg-begonia-gradient rounded-t-xl text-white">
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
              {props.result.length > 0 ? (
                props.result.map((menuItem, index) => (
                  <div
                    onMouseEnter={(e) =>
                      handleMouseEnter(menuItem.id as string)
                    }
                    onMouseLeave={handleMouseLeave}
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
                          <span>{menuItem.title?.rendered}</span>
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
                        onMouseEnter={(e) =>
                          handleMouseEnter(menuItem.id as string)
                        }
                        onMouseLeave={handleMouseLeave}
                        className="bg-begonia-gradient z-[100] absolute left-full top-0 inset-0 p-[16px] h-fit w-full min-w-[600px] origin-top-right rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white"
                      >
                        <div className="py-1 grid-cols-2 grid gap-x-10 gap-5">
                          {(props.subCategories as ISubCategoryField[])
                            .filter(
                              (subCategory) =>
                                subCategory.acf?.category === menuItem.id
                            )
                            .map((item) => (
                              <Menu.Item key={item.acf!?.code}>
                                {({ active }) => (
                                  <Link
                                    href={
                                      `/san-pham/${menuItem.id}/${
                                        item?.id
                                      }` as string
                                    }
                                    className={clsx(
                                      "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                                    )}
                                  >
                                    {item.title?.rendered}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                        </div>
                        <div className="h-[260px] w-full mt-5 border rounded-xl border-lotion overflow-hidden">
                          <Image
                            width={530}
                            height={260}
                            className="h-full w-full object-cover"
                            src={menuItem?.acf?.image?.url as string}
                            alt={menuItem?.acf?.image?.alt || "image"}
                          />
                        </div>
                      </Menu.Items>
                    </Transition>
                  </div>
                ))
              ) : (
                <div className="py-10">
                  <Skeleton count={5} />
                </div>
              )}
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
