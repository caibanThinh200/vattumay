import Image from "next/image";
import Link from "next/link";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className="bg-lotion py-[12px] border-2 border-bright-gray fixed left-0 w-full top-0 z-20">
      <div className="container mx-auto flex justify-between gap-10">
        <div className="flex gap-5 w-6/12">
          <Link href={"/"} className="flex gap-5 items-center w-4/12">
            <Image height={40} width={40} src="/svg/logo.svg" alt="Logo" />
            <h2 className="text-xl font-bold">VATTUMAY</h2>
          </Link>
          <div className="w-9/12">
            <div className="bg-anti-flash-white py-[13px] px-[15px] flex gap-5 rounded-xl w-full">
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
              <div className="w-10/12">
                <input
                  className="text-auto-metal-saurus bg-inherit w-full outline-none"
                  placeholder=" Nhập sản phẩm bạn muốn tìm kiếm"
                />
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
            <button className="bg-begonia-gradient px-[24px] py-[10px] font-bold text-white rounded-xl">
              Liên hệ tư vấn
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-xl border-2 border-bright-gray bg-anti-flash-white p-[5px]">
            <Link
              href={"/"}
              className="rounded-lg border border-anti-flash-white hover:border-begonia transition-all py-[10px] px-[7px]"
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
              href={"/"}
              className="rounded-lg border border-anti-flash-white hover:border-begonia transition-all py-[10px] px-[7px]"
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
  );
};

export default Header;
