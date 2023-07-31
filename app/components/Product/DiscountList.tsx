import Image from "next/image";

interface IListDiscountProductProps {}

const ListDiscountProduct: React.FC<IListDiscountProductProps> = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Các sản phẩm đang giảm giá</h2>
        <button className="text-begonia">Xem thêm</button>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-[20px]">
        <div className="rounded-xl border overflow-hidden group border-bright-gray flex flex-col relative">
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
          <div className="p-[16px] flex flex-col gap-4 group-hover:bg-begonia-gradient group-hover:text-white transition-all">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="bg-lotion border border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group overflow-hidden border-bright-gray flex flex-col relative">
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
          <div className="p-[16px] flex flex-col gap-4 group-hover:bg-begonia-gradient group-hover:text-white transition-all">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="bg-lotion border border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border group overflow-hidden border-bright-gray flex flex-col relative">
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
          <div className="p-[16px] flex flex-col gap-4 group-hover:bg-begonia-gradient group-hover:text-white transition-all">
            <p className="font-bold">
              30-Degree Trapezoidal Lead Screw Component For Support
            </p>
            <p>Type Product</p>
            <div>
              <button className="bg-lotion border border-begonia text-begonia px-[24px] py-[10px] font-bold rounded-xl">
                Liên hệ báo giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDiscountProduct;
