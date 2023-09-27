"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { SettingContext } from "../context/setting";
import { Combobox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Cookies from "js-cookie";
import { getAllProducts } from "../action";
import { IProductField } from "../interface/product";
import { IImageField } from "../interface/category";
import { useCallback } from "react";

interface IHeaderProps {
  openContact: boolean;
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { breadcrump } = useContext(SettingContext);
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [currentLang, setCurrentLang] = useState("vi");
  const [showToolbar, setShowToolbar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [filteredData, setFilteredData] = useState<IProductField[]>([]);

  useEffect(() => {
    window.addEventListener("click", () => {
      setShowSearchResult(false);
    });
    return () =>
      window.removeEventListener("click", () => {
        setShowSearchResult(false);
      });
  }, []);

  useEffect(() => {
    const isToolbar = params.has("has_category_bar");
    setShowToolbar(isToolbar);
  }, [params]);

  useEffect(() => {
    const lang = Cookies.get("lang")?.toLowerCase() || "vi";
    if (lang === "vi") {
      setTimeout(() => {
        Cookies.remove("googtrans");
      }, 200);
    }
    setCurrentLang(lang);
  }, []);

  useEffect(() => {
    getAllProducts({ search: searchValue, per_page: 5 }).then((res) =>
      setFilteredData(res.data)
    );
  }, [searchValue]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let func;
      clearTimeout(func);
      func = setTimeout(() => {
        setSearchValue(event.target.value);
        setShowSearchResult(!!event.target.value);
      }, 500);
    },
    []
  );

  const handleEnterSearch = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setShowSearchResult(false);
        router.replace(`/search?t=${searchValue}`);
      }
    },
    [router, searchValue]
  );

  const handleChangeLanguage = useCallback((language: string, lang: string) => {
    Cookies.set("lang", lang);
    Cookies.set("googtrans", language);

    window.location.reload();
  }, []);

  return (
    <div className="fixed left-0 w-full top-0 z-40">
      <div className="bg-lotion py-[12px] border-2 border-bright-gray">
        <div className="container mx-auto flex justify-between gap-2">
          <div className="flex gap-5 w-8/12">
            <Link href={"/"} className="flex gap-5 items-center w-4/12">
              <Image height={40} width={40} src="/svg/logo.svg" alt="Logo" />
              <h2 className="text-xl font-bold">VATTUMAY</h2>
            </Link>
            <div className="w-full">
              <div
                className={clsx(
                  "bg-anti-flash-white py-[13px] px-[15px] flex gap-5 rounded-xl w-full relative transition-all",
                  showSearchResult && "border border-begonia"
                )}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                      stroke="#374151"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <Combobox>
                    <Combobox.Input
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowSearchResult(true);
                      }}
                      onKeyDown={handleEnterSearch}
                      onChange={handleSearch}
                      className="text-auto-metal-saurus bg-inherit w-full outline-none"
                      placeholder=" Nhập sản phẩm bạn muốn tìm kiếm"
                    />
                    <Transition
                      as={Fragment}
                      show={showSearchResult}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      // afterLeave={() => setQuery("")}
                    >
                      {searchValue ? (
                        <Combobox.Options
                          onClick={(e) => e.stopPropagation()}
                          className="absolute left-0 p-[24px]  mt-[25px] w-full overflow-auto rounded-xl bg-lotion text-base shadow-lg focus:outline-none sm:text-sm"
                        >
                          <div className="rounded-lg flex flex-col gap-[12px]">
                            {filteredData?.length > 0 ? (
                              filteredData?.map((product) => (
                                <div
                                  onClick={() =>
                                    window.open(
                                      `/san-pham/${product?.acf?.sub_category?.acf?.category}/${product?.acf?.sub_category?.acf?.code}/${product?.id}`
                                    )
                                  }
                                  key={product.id}
                                  className="flex gap-4 items-center rounded-lg p-[12px] bg-anti-flash-white border border-anti-flash-white hover:bg-begonia-gradient hover:text-white transition-all cursor-pointer"
                                >
                                  <div className="w-[44px]">
                                    <Image
                                      width={44}
                                      height={44}
                                      src={
                                        (product.acf?.image as IImageField[])[0]
                                          ?.url as string
                                      }
                                      alt={
                                        (product.acf?.image as IImageField[])[0]
                                          ?.alt as string
                                      }
                                      className="object-cover rounded-xl w-[44px] h-[44px] "
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <p className="line-clamp-1 text-[14px] font-bold overflow-hidden">
                                      {product.title?.rendered}
                                    </p>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div>Không tìm thấy sản phẩm</div>
                            )}
                          </div>
                        </Combobox.Options>
                      ) : (
                        <div className="absolute w-[120%] rounded-lg shadow-xl flex flex-col gap-5 left-0 p-[24px] bg-lotion top-[64px]">
                          <p className="text-[#4B5563] font-semibold">
                            Các sản phẩm đáng chú ý
                          </p>
                          <div className="grid grid-cols-3 gap-5">
                            {filteredData?.slice(0, 3).map((item) => (
                              <div
                                key={item.id}
                                style={{
                                  boxShadow:
                                    "0px 0px 8px 0px rgba(53, 53, 53, 0.08)",
                                }}
                                onClick={() =>
                                  window.open(
                                    `/san-pham/${item?.acf?.sub_category?.acf?.category}/${item?.acf?.sub_category?.acf?.code}/${item?.id}`
                                  )
                                }
                                // href={`/san-pham/${item?.acf?.sub_category?.acf?.category}/${item?.acf?.sub_category?.acf?.code}/${item?.acf?.code}`}
                                className="rounded-xl group transition-all overflow-hidden flex flex-col relative"
                              >
                                <div className="h-[231px]">
                                  <Image
                                    className="w-full h-full object-cover"
                                    src={
                                      (item.acf?.image as IImageField[])[0]
                                        ?.url as string
                                    }
                                    alt={
                                      (item.acf?.image as IImageField[])[0]
                                        ?.alt as string
                                    }
                                    height={315}
                                    width={300}
                                  />
                                </div>
                                <div className="p-[14px] group-hover:bg-begonia-gradient gap-3 transition-all group-hover:text-white flex items-center justify-between">
                                  <p
                                    style={{ wordBreak: "break-word" }}
                                    className="w-full font-bold line-clamp-2"
                                  >
                                    {item.title?.rendered}
                                  </p>
                                  <svg
                                    className="w-3/12 hidden group-hover:block cursor-pointer"
                                    // onClick={(e) =>
                                    //   handlePurchaseProduct(e, item)
                                    // }
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      className="group-hover:stroke-white transition-all"
                                      d="M8.98816 8.98816C8.67559 9.30072 8.5 9.72464 8.5 10.1667V11C8.5 17.9033 14.0967 23.5 21 23.5H21.8333C22.2754 23.5 22.6993 23.3244 23.0118 23.0118C23.3244 22.6993 23.5 22.2754 23.5 21.8333V19.1008C23.5 18.9259 23.445 18.7553 23.3427 18.6134C23.2404 18.4714 23.096 18.3653 22.93 18.31L19.1858 17.0617C18.9956 16.9984 18.7888 17.0059 18.6036 17.0827C18.4184 17.1596 18.2671 17.3006 18.1775 17.48L17.2358 19.3608C15.1954 18.4389 13.5611 16.8046 12.6392 14.7642L14.52 13.8225C14.6994 13.7329 14.8404 13.5816 14.9173 13.3964C14.9941 13.2112 15.0016 13.0044 14.9383 12.8142L13.69 9.07C13.6348 8.90413 13.5287 8.75984 13.387 8.65754C13.2452 8.55525 13.0748 8.50013 12.9 8.5H10.1667C9.72464 8.5 9.30072 8.67559 8.98816 8.98816Z"
                                      stroke="url(#paint0_linear_209_5018)"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <rect
                                      className="group-hover:stroke-white transition-all"
                                      x="0.5"
                                      y="0.5"
                                      width="31"
                                      height="31"
                                      rx="5.5"
                                      stroke="url(#paint1_linear_209_5018)"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Transition>
                  </Combobox>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <Link href={"/"} className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#9CA3AF] font-semibold">Cart</span>
            </Link>
            <div>
              <button
                onClick={(e) => props.setOpenContact(true)}
                className="bg-begonia-gradient px-[24px] py-[10px] font-bold text-white rounded-xl"
              >
                Liên hệ tư vấn
              </button>
            </div>
            <div className="flex items-center gap-2 rounded-xl border-2 border-bright-gray bg-anti-flash-white p-[5px]">
              <Link
                onClick={(e) => handleChangeLanguage("/en/vi", "VI")}
                href={"/"}
                className={clsx(
                  "rounded-lg transition-all py-[10px] px-[7px] hover:border-begonia",
                  currentLang === "vi" && "border-begonia border"
                )}
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="22" height="16" rx="2" fill="#F93939" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.0019 9.95193L8.81237 11.1253L9.23141 8.64313L7.46094 6.88633L9.90818 6.52367L11.0019 4.2666L12.0967 6.52367L14.5428 6.88633L12.7724 8.64313L13.1914 11.1242"
                    fill="#FFDA2C"
                  />
                </svg>
              </Link>
              <Link
                onClick={(e) => handleChangeLanguage("/vi/en", "EN")}
                href={`/`}
                className={clsx(
                  "rounded-lg border border-anti-flash-white hover:border-begonia transition-all py-[10px] px-[7px]",
                  currentLang === "en" && "border border-begonia"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_122_1220)">
                    <rect width="22" height="16" rx="2" fill="#1A47B8" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.34035 0H0V2.66667L19.6469 16L22 16V13.3333L2.34035 0Z"
                      fill="white"
                    />
                    <path
                      d="M0.780579 0L22 14.4378V16H21.2377L0 1.54726V0H0.780579Z"
                      fill="#F93939"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9048 0H22V2.66667C22 2.66667 8.39122 11.5499 2.09524 16H0V13.3333L19.9048 0Z"
                      fill="white"
                    />
                    <path
                      d="M22 0H21.2895L0 14.4502V16H0.780579L22 1.55895V0Z"
                      fill="#F93939"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.00075 0H14.0176V4.93527H22V11.0615H14.0176V16H8.00075V11.0615H0V4.93527H8.00075V0Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.26316 0H12.7368V6.15385H22V9.84615H12.7368V16H9.26316V9.84615H0V6.15385H9.26316V0Z"
                      fill="#F93939"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_122_1220">
                      <rect width="22" height="16" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showToolbar && (
        <div className="py-[12px] bg-begonia-gradient">
          <div className="mx-auto container text-white flex items-center gap-2">
            Danh mục sản phẩm: <p className="font-bold">Profile và phụ kiện</p>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="#F9FAFB"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
      {pathname !== "/" && (
        <div className="py-[10px] border border-bright-gray border-t-0 bg-ghost-white">
          <div className="container mx-auto">
            <div className="flex gap-4">
              <Link href={"/"} className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 8L3.33333 6.66667M3.33333 6.66667L8 2L12.6667 6.66667M3.33333 6.66667V13.3333C3.33333 13.5101 3.40357 13.6797 3.5286 13.8047C3.65362 13.9298 3.82319 14 4 14H6M12.6667 6.66667L14 8M12.6667 6.66667V13.3333C12.6667 13.5101 12.5964 13.6797 12.4714 13.8047C12.3464 13.9298 12.1768 14 12 14H10M6 14C6.17681 14 6.34638 13.9298 6.4714 13.8047C6.59643 13.6797 6.66667 13.5101 6.66667 13.3333V10.6667C6.66667 10.4899 6.7369 10.3203 6.86193 10.1953C6.98695 10.0702 7.15652 10 7.33333 10H8.66667C8.84348 10 9.01305 10.0702 9.13807 10.1953C9.2631 10.3203 9.33333 10.4899 9.33333 10.6667V13.3333C9.33333 13.5101 9.40357 13.6797 9.5286 13.8047C9.65362 13.9298 9.82319 14 10 14M6 14H10"
                    stroke="#6B7280"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Trang chủ
              </Link>
              {/* /
              <Link href={"/category"} className="text-begonia">
                Danh mục sản phẩm
              </Link> */}
              {breadcrump.map((path) => (
                <div key={path.name}>
                  /
                  <Link
                    href={path.href as string}
                    className={clsx(" ml-3", path.active && "text-begonia")}
                  >
                    {path.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
