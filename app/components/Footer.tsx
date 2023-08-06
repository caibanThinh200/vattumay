import Image from "next/image";
import Link from "next/link";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div>
      <div className="bg-begonia-gradient">
        <div className="py-[44px] px-[60px] flex gap-[136px] text-white">
          <div className="flex flex-col gap-[48px] w-8/12">
            <div>
              <Link href={"/"} className="flex gap-5 items-center">
                <Image height={40} width={40} src="/svg/logo.svg" alt="Logo" />
                <h2 className="text-lg font-bold text-white">VATTUMAY</h2>
              </Link>
              <div className="mt-5">
                <p className="text-base">
                  CÔNG TY TNHH DỊCH VỤ KỸ THUẬT VÀ CUNG ỨNG VẬT TƯ AIFVINAAIF Vina
                  luôn nỗ lực cung cấp dịch vụ và sản phẩm có chất lượng và công
                  nghệ tiên phong liên quan đến Nhà máy sản xuất gồm:1. Nhà máy
                  thông minh 4.0: Phần mềm MES, OEE ...2. Máy tự động: thiết kế và
                  cung cấp máy tự động, thiết kế và cung cấp đồ gá.3. Vật tư tiêu
                  hao trong nhà máy....
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M31.455 28.995C31.455 29.535 31.335 30.09 31.08 30.63C30.825 31.17 30.495 31.68 30.06 32.16C29.325 32.97 28.515 33.555 27.6 33.93C26.7 34.305 25.725 34.5 24.675 34.5C23.145 34.5 21.51 34.14 19.785 33.405C18.06 32.67 16.335 31.68 14.625 30.435C12.9 29.175 11.265 27.78 9.705 26.235C8.16 24.675 6.765 23.04 5.52 21.33C4.29 19.62 3.3 17.91 2.58 16.215C1.86 14.505 1.5 12.87 1.5 11.31C1.5 10.29 1.68 9.315 2.04 8.415C2.4 7.5 2.97 6.66 3.765 5.91C4.725 4.965 5.775 4.5 6.885 4.5C7.305 4.5 7.725 4.59 8.1 4.77C8.49 4.95 8.835 5.22 9.105 5.61L12.585 10.515C12.855 10.89 13.05 11.235 13.185 11.565C13.32 11.88 13.395 12.195 13.395 12.48C13.395 12.84 13.29 13.2 13.08 13.545C12.885 13.89 12.6 14.25 12.24 14.61L11.1 15.795C10.935 15.96 10.86 16.155 10.86 16.395C10.86 16.515 10.875 16.62 10.905 16.74C10.95 16.86 10.995 16.95 11.025 17.04C11.295 17.535 11.76 18.18 12.42 18.96C13.095 19.74 13.815 20.535 14.595 21.33C15.405 22.125 16.185 22.86 16.98 23.535C17.76 24.195 18.405 24.645 18.915 24.915C18.99 24.945 19.08 24.99 19.185 25.035C19.305 25.08 19.425 25.095 19.56 25.095C19.815 25.095 20.01 25.005 20.175 24.84L21.315 23.715C21.69 23.34 22.05 23.055 22.395 22.875C22.74 22.665 23.085 22.56 23.46 22.56C23.745 22.56 24.045 22.62 24.375 22.755C24.705 22.89 25.05 23.085 25.425 23.34L30.39 26.865C30.78 27.135 31.05 27.45 31.215 27.825C31.365 28.2 31.455 28.575 31.455 28.995Z"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M26.25 15C26.25 14.1 25.545 12.72 24.495 11.595C23.535 10.56 22.26 9.75 21 9.75"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.5 15C31.5 9.195 26.805 4.5 21 4.5"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-light">Số điện thoại</p>
                  <p className="font-bold">0818 598 088</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5"
                      stroke="#F9FAFB"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-light">Email liên hệ</p>
                  <p className="font-bold">thietbivattumay@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-4/12">
            <p className="text-[20px] font-bold">Liên hệ Zalo</p>
            <Image
              src={"/image/qr-code.png"}
              width={220}
              height={220}
              alt="QR Code"
            />
          </div>
          {/* <div className="grid lg:grid-cols-4 grid-rows-2 gap-5 gap-x-10">
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
            <div>
              <p className="font-bold">Chuyển động tuyến tính</p>
            </div>
          </div> */}
          {/* <div className="flex justify-between items-center">
            <div className="text-xs font-light">
              Copyright © 2023. LogoIpsum. All rights reserved.
            </div>
            <div className="flex gap-5">
              <div>
                <svg
                  className="inline mr-3"
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
                <span>0858 543 323</span>
              </div>
              <div className="">
                <Image
                  className="inline mr-3"
                  alt="zalo"
                  src={"/image/zalo.png"}
                  height={32}
                  width={32}
                />
                <span>0858 543 323</span>
              </div>
            </div>
            <div className="text-xs font-light flex gap-5">
              <Link href={"/"}>Terms & Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
          </div> */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <p className="text-[20px] font-bold">Liên hệ Zalo</p>
              <div>
                <div className="bg-white p-[6px] flex justify-between items-center rounded-full">
                  <div className="flex gap-2 items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M11.3335 13.6667H4.66683C2.66683 13.6667 1.3335 12.6667 1.3335 10.3334V5.66671C1.3335 3.33337 2.66683 2.33337 4.66683 2.33337H11.3335C13.3335 2.33337 14.6668 3.33337 14.6668 5.66671V10.3334C14.6668 12.6667 13.3335 13.6667 11.3335 13.6667Z"
                        stroke="#9CA3AF"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.3332 6L9.2465 7.66667C8.55983 8.21333 7.43317 8.21333 6.7465 7.66667L4.6665 6"
                        stroke="#9CA3AF"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input
                      className="text-[#9CA3AF]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="bg-begonia-gradient px-[24px] py-[10px] font-bold text-white rounded-full">
                    Gởi
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[20px] font-bold">Liên hệ mạng xã hội</p>
              <div className="flex gap-4">
                <Image
                  height={32}
                  width={32}
                  src={"/image/zalo.png"}
                  alt="zalo"
                />
                <Image
                  height={32}
                  width={32}
                  src={"/image/facebook.png"}
                  alt="zalo"
                />
                <Image
                  height={32}
                  width={32}
                  src={"/image/instagram.png"}
                  alt="zalo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-[6px] text-center">
        <p>
          © Bản quyền thuộc <span className="font-bold">VẬT TƯ MÁY</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
