"use client";

import Image from "next/image";
import Slider from "react-slick";
import "./product-info.scss";
import Select from "react-select";
import { Listbox } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProductInfoProps {
  handleOpenContact: () => void;
}

const ProductInfo: React.FC<IProductInfoProps> = ({ handleOpenContact }) => {
  const settings = {
    // dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="flex gap-[60px]">
      <div className="lg:w-5/12 w-full">
        <div className="flex flex-col gap-[20px]">
          <div className="h-[460px] w-full overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover rounded-xl"
              width={596}
              height={460}
              src={"/image/product-2.png"}
              alt="Product 2"
            />
          </div>
          <div>
            <Swiper slidesPerView={3} spaceBetween={10}>
              <SwiperSlide>
                <div className="h-[130px] rounded-xl overflow-hidden !w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={"/image/product-2.png"}
                    alt="Product 2"
                    height={130}
                    width={200}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[130px] rounded-xl overflow-hidden !w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={"/image/product-2.png"}
                    alt="Product 2"
                    height={130}
                    width={200}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[130px] rounded-xl overflow-hidden !w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={"/image/product-2.png"}
                    alt="Product 2"
                    height={130}
                    width={200}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[130px] rounded-xl overflow-hidden !w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={"/image/product-2.png"}
                    alt="Product 2"
                    height={130}
                    width={200}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[130px] rounded-xl overflow-hidden !w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={"/image/product-2.png"}
                    alt="Product 2"
                    height={130}
                    width={200}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[130px] rounded-xl overflow-hidden !w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={"/image/product-2.png"}
                    alt="Product 2"
                    height={130}
                    width={200}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="lg:w-7/12 w-full flex flex-col justify-between">
        <div className="flex flex-col gap-[36px]">
          <div>
            <h1 className="text-[32px] font-bold">
              Đai định thời răng hình thang MXL/XL/L/H Chính xác/Tiết kiệm
            </h1>
            <p className="bg-begonia-gradient text-begonia text-[14px] bg-clip-text flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421Z"
                  stroke="url(#paint0_linear_176_10283)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.63867 7.99992C2.48801 5.29525 5.01534 3.33325 8 3.33325C10.9853 3.33325 13.512 5.29525 14.3613 7.99992C13.512 10.7046 10.9853 12.6666 8 12.6666C5.01534 12.6666 2.48801 10.7046 1.63867 7.99992Z"
                  stroke="url(#paint1_linear_176_10283)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_176_10283"
                    x1="5.04587"
                    y1="5.22667"
                    x2="13.2451"
                    y2="8.55907"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F96C7F" />
                    <stop offset="1" stop-color="#B42A3D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_176_10283"
                    x1="-1.39609"
                    y1="1.52881"
                    x2="21.8544"
                    y2="14.41"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F96C7F" />
                    <stop offset="1" stop-color="#B42A3D" />
                  </linearGradient>
                </defs>
              </svg>
              Xem các thông số
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-4 items-center">
              <p className="font-bold">Chọn mã số</p>
              <Listbox>
                <Listbox.Button className="rounded-xl py-[13px] px-[15px] bg-anti-flash-white border flex gap-4 justify-between">
                  <span className="font-bold text-begonia line-clamp-1">
                    086HJJ
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="#6B7280"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Listbox.Button>
              </Listbox>
            </div>
            <div>
              <p className="font-bold">Lựa chọn thông số</p>
              <Listbox>
                <Listbox.Button className="rounded-xl py-[13px] px-[15px] bg-anti-flash-white border flex gap-4 justify-between w-6/12 mt-2">
                  <span className="line-clamp-1">Số phần dây đai (cao độ)</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="#6B7280"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Listbox.Button>
              </Listbox>
            </div>
            <div>
              <p className="font-bold">Cấu hình sản phẩm</p>
              <div className="flex gap-4 mt-2">
                <Listbox>
                  <Listbox.Button className="rounded-xl py-[13px] px-[15px] border flex gap-4 justify-between bg-anti-flash-white lg:w-8/12">
                    <span className="line-clamp-1">
                      Chiều rồng vành đai danh nghĩa{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="#6B7280"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Listbox.Button>
                </Listbox>
                <Listbox>
                  <Listbox.Button className="rounded-xl py-[13px] px-[15px] border flex gap-4 justify-between bg-anti-flash-white lg:w-4/12">
                    <span className="line-clamp-1">Số răng bánh răng</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="#6B7280"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Listbox.Button>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[16px] bg-anti-flash-white flex justify-center items-center gap-[32px]">
          <div className="lg:w-3/12 bg-white rounded-md border border-[#D1D5DB] overflow-hidden items-center grid grid-cols-3 h-fit py-[10px]">
            <button>+</button>
            <p className="text-center">1</p>
            <button>-</button>
          </div>
          <div className="w-6/12">
            <button
              onClick={handleOpenContact}
              className="text-white bg-begonia-gradient w-full flex justify-center gap-3 rounded-xl py-[10px] px-[24px]"
            >
              Liên hệ báo giá
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V6C3 14.284 9.716 21 18 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15.721C21.0001 15.511 20.934 15.3064 20.8112 15.136C20.6885 14.9657 20.5152 14.8383 20.316 14.772L15.823 13.274C15.5947 13.1981 15.3466 13.2071 15.1244 13.2993C14.9021 13.3915 14.7205 13.5607 14.613 13.776L13.483 16.033C11.0345 14.9267 9.07332 12.9655 7.967 10.517L10.224 9.387C10.4393 9.27945 10.6085 9.0979 10.7007 8.87564C10.7929 8.65339 10.8019 8.40534 10.726 8.177L9.228 3.684C9.16171 3.48496 9.03449 3.3118 8.86436 3.18905C8.69422 3.0663 8.48979 3.00016 8.28 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579Z"
                  stroke="#F9FAFB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div>
            <Image alt="zalo" src={"/image/zalo.png"} height={32} width={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
