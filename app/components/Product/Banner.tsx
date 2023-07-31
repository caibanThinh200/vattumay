import Image from "next/image";

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = (props) => {
  return <div className="flex gap-[20px]">
    <div className="rounded-xl overflow-hidden lg:w-9/12">
        <Image className="w-full h-full object-cover" width={700} height={400}  src="/image/banner-1.png" alt="Banner left"/>
    </div>
    <div className="rounded-xl overflow-hidden lg:w-3/12">
        <Image className="w-full h-full object-cover" width={400} height={400}  src="/image/banner-2.png" alt="Banner left"/>
    </div>
  </div>;
};

export default Banner;
