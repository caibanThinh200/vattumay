import { IProductField } from "@/app/interface/product";

interface ITableHeaderProps {
  result?: IProductField[]
}

const TableHeader: React.FC<ITableHeaderProps> = (props) => {
  return (
    <div className="p-[16px] flex justify-between bg-white items-center">
      <div>
        <p className="text-[20px] font-bold">Danh sách sản phẩm ({props.result?.length})</p>
      </div>
      <div className="flex gap-4 text-auto-metal-saurus">
        <div className="flex gap-2 p-[8px]">
          Hình ảnh
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V8C4 8.53043 4.21071 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10H8C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8V6C10 5.46957 9.78929 4.96086 9.41421 4.58579C9.03914 4.21071 8.53043 4 8 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5858 4.58579C14.2107 4.96086 14 5.46957 14 6V8C14 8.53043 14.2107 9.03914 14.5858 9.41421C14.9609 9.78929 15.4696 10 16 10H18C18.5304 10 19.0391 9.78929 19.4142 9.41421C19.7893 9.03914 20 8.53043 20 8V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H16C15.4696 4 14.9609 4.21071 14.5858 4.58579Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.58579 14.5858C4.21071 14.9609 4 15.4696 4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18V16C10 15.4696 9.78929 14.9609 9.41421 14.5858C9.03914 14.2107 8.53043 14 8 14H6C5.46957 14 4.96086 14.2107 4.58579 14.5858Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex gap-2 bg-anti-flash-white p-[8px] rounded-xl">
          Danh sách
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 18H20M4 6H20H4ZM4 10H20H4ZM4 14H20H4Z"
              stroke="#6B7280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
