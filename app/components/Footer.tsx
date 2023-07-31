import Image from "next/image";
import Link from "next/link";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div className="bg-charcoal py-[44px] px-[60px] flex flex-col gap-[60px] text-white">
      <div className="text-center">
        <Link href={"/"} className="flex justify-center gap-5 items-center">
          <Image height={40} width={40} src="/svg/logo.svg" alt="Logo" />
          <h2 className="text-lg font-bold text-white">VATTUMAY</h2>
        </Link>
        <div className="mt-5">
          <p className="text-base">
            CÔNG TY TNHH DỊCH VỤ KỸ THUẬT VÀ CUNG ỨNG VẬT TƯ AIFVINAAIF Vina
            luôn nỗ lực cung cấp dịch vụ và sản phẩm có chất lượng và công nghệ
            tiên phong liên quan đến Nhà máy sản xuất gồm:1. Nhà máy thông minh
            4.0: Phần mềm MES, OEE ...2. Máy tự động: thiết kế và cung cấp máy
            tự động, thiết kế và cung cấp đồ gá.3. Vật tư tiêu hao trong nhà
            máy....
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-rows-2 gap-5 gap-x-10">
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
      </div>
      <div className="flex justify-between items-center">
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
              src={"/image/zalo-logo.png"}
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
      </div>
      <div>
        <Image
          className="mx-auto"
          src={"/image/qr-code.png"}
          width={220}
          height={220}
          alt="QR Code"
        />
      </div>
    </div>
  );
};

export default Footer;
