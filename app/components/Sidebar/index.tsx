import Link from "next/link";

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  return (
    <div className="bg-lotion border border-bright-gray rounded-xl sticky top-[100px]">
      <div className="py-[18px] px-[24px] border-b border-bright-gray">
        <h2 className="font-bold text-xl">Danh mục sản phẩm</h2>
      </div>
      <div className="px-[24px]">
        <div className="py-[18px] border-b border-dashed border-b-bright-gray flex justify-between cursor-pointer">
          <Link href={"/"}>Chuyển động tuyến tính</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="py-[18px] border-b border-dashed border-b-bright-gray flex justify-between cursor-pointer">
          <Link href={"/"}>Chuyển động tuyến tính</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="py-[18px] border-b border-dashed border-b-bright-gray flex justify-between cursor-pointer">
          <Link href={"/"}>Chuyển động tuyến tính</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="py-[18px] border-b border-dashed border-bright-gray flex justify-between cursor-pointer">
          <Link href={"/"}>Chuyển động tuyến tính</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="py-[18px] border-b border-dashed border-bright-gray flex justify-between cursor-pointer">
          <Link href={"/"}>Chuyển động tuyến tính</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="py-[18px] border-bright-gray flex justify-between cursor-pointer">
          <Link href={"/"}>Chuyển động tuyến tính</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 4.16675L13.3333 10.0001L7.5 15.8334"
              stroke="#6B7280"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
