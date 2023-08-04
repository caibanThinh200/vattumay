"use client";

import Link from "next/link";
import PopupMenu from "./Popup";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import Image from "next/image";

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  return (
    <div className="bg-lotion z-20 border border-bright-gray rounded-xl sticky top-[100px]">
      <div className="py-[18px] px-[24px] border-b border-bright-gray">
        <h2 className="font-bold text-xl">Danh mục sản phẩm</h2>
      </div>
      <div className="px-[24px]">
        <Menu>
          {({ open }) => (
            <div>
              <div className="relative">
                <Menu.Button
                  onMouseEnter={({ target }) =>
                    (target as any)?.click && (target as any)?.click()
                  }
                  onMouseLeave={({ target }) =>
                    (target as any)?.click && (target as any)?.click()
                  }
                  as="div"
                >
                  <div
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer"
                  >
                    <Link href={"/"}>
                      <span>Chuyển động tuyến tính</span>
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
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    style={{
                      background:
                        "linear-gradient(131deg, #FFBEC7 0%, #C25B69 100%)",
                    }}
                    className="z-100 absolute left-[calc(100%+30px)] p-[16px] w-full min-w-[500px] top-0 mt-2 origin-top-right rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white"
                  >
                    <div className="py-1 grid-cols-2 grid gap-x-10 gap-5">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Trục
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Sửa chữ vòng
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Ảnh hưởng theo tuyến tính
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Vít bóng: Bộ phận hỗ trợ
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Ống lót không dầu
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Đường ray hướng dẫn tuyến tính
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Vít me hình thang: Thành phần vít me
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Chuỗi kéo
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "text-white font-bold py-2 text-sm border-b border-dashed border-b-white"
                            )}
                          >
                            Chuỗi kéo
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="h-[260px] w-full mt-5">
                      <Image
                        width={530}
                        height={260}
                        className="h-full w-full object-cover"
                        src={"/image/banner-1.png"}
                        alt="image"
                      />
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Bộ phần truyền động</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Chuyển động quay</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Hướng dẫn định vị và cố định</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Kết cấu khung công nghiệp</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Hồ sơ và phụ kiện</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Mô-đun chức năng</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Bộ phận tiêu chuẩn</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[18px] border-b border-dashed border-b-bright-gray group flex hover:text-begonia justify-between cursor-pointer">
                <Link href={"/"}>Vật liệu chức năng</Link>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
