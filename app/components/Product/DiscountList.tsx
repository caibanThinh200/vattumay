import Image from "next/image";
import Link from "next/link";

interface IListDiscountProductProps {}

const ListDiscountProduct: React.FC<IListDiscountProductProps> = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Các sản phẩm đang giảm giá</h2>
        <button className="text-begonia">Xem thêm</button>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-[20px]">
        <Link href={"/san-pham/sp-1"} className="rounded-xl border overflow-hidden group border-bright-gray flex flex-col relative">
          <div className="rounded-xl text-white absolute px-[12px] py-[6px] bg-begonia-gradient top-5 right-5 z-10">
            <p>Giảm giá 30%</p>
          </div>
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex justify-between">
            <p className="font-bold">Hỗ trợ trực</p>
              <svg
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
        </Link>
        <Link href={"/san-pham/sp-1"} className="rounded-xl border group overflow-hidden border-bright-gray flex flex-col relative">
          <div className="rounded-xl text-white absolute px-[12px] py-[6px] bg-begonia-gradient top-5 right-5 z-10">
            <p>Giảm giá 30%</p>
          </div>
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex justify-between">
            {/* <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div> */}
            <p className="font-bold">Hỗ trợ trực</p>
              <svg
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
        </Link>
        <Link href={"/san-pham/sp-1"} className="rounded-xl border group overflow-hidden border-bright-gray flex flex-col relative">
          <div className="rounded-xl text-white absolute px-[12px] py-[6px] bg-begonia-gradient top-5 right-5 z-10">
            <p>Giảm giá 30%</p>
          </div>
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex justify-between">
            {/* <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div> */}
            <p className="font-bold">Hỗ trợ trực</p>
              <svg
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
        </Link>
      </div>
    </div>
  );
};

export default ListDiscountProduct;
