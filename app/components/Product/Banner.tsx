"use client";

import Image from "next/image";

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <div className="flex gap-[20px] cursor-pointer">
      <div
        onClick={() => window.open("https://aifvina.com/")}
        className="rounded-xl overflow-hidden lg:w-9/12"
      >
        <Image
          loading="eager"
          className="w-full h-full object-cover"
          width={700}
          height={400}
          src="/image/banner-3.jpg"
          alt="Banner left"
        />
      </div>
      <div
        onClick={() => window.open("https://aifvina.com/")}
        className="rounded-xl overflow-hidden lg:w-3/12 cursor-pointer"
      >
        <Image
          loading="eager"
          className="w-full h-full object-cover"
          width={700}
          height={400}
          src="/image/banner-4.jpg"
          alt="Banner left"
        />
      </div>
    </div>
  );
};

export default Banner;
