import Image from "next/image";

interface IListProps {}

const List: React.FC<IListProps> = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Tất cả sản phẩm</h2>
        {/* <button className="text-begonia">Xem thêm</button> */}
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-[20px]">
        <div className="rounded-xl border group transition-all overflow-hidden border-bright-gray flex flex-col relative">
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex flex-col gap-4">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group transition-all overflow-hidden border-bright-gray flex flex-col relative">
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex flex-col gap-4">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group transition-all overflow-hidden border-bright-gray flex flex-col relative">
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex flex-col gap-4">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group transition-all overflow-hidden border-bright-gray flex flex-col relative">
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex flex-col gap-4">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group transition-all overflow-hidden border-bright-gray flex flex-col relative">
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex flex-col gap-4">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group transition-all overflow-hidden border-bright-gray flex flex-col relative">
          <div className="h-[315px]">
            <Image
              className="w-full h-full object-cover"
              src={"/image/product-1.png"}
              alt="Product item"
              height={315}
              width={300}
            />
          </div>
          <div className="p-[16px] group-hover:bg-begonia-gradient transition-all group-hover:text-white flex flex-col gap-4">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="border bg-white border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
