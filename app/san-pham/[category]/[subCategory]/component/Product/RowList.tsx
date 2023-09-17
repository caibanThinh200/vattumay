import { FAKE_DATA } from "@/app/constant";
import { IImageField } from "@/app/interface/category";
import { IProductField } from "@/app/interface/product";
import Image from "next/image";
import Link from "next/link";

interface IRowListProps {
  result?: IProductField[];
}

const RowList: React.FC<IRowListProps> = (props) => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr className="uppercase text-auto-metal-saurus text-[14px]">
            <th className="p-[16px] text-left">LEGEND</th>
            <th className="p-[16px] text-left">TÊN SERIES</th>
            <th className="p-[16px] text-left">THUỘC TÍNH SẢN PHẨM</th>
            <th className="p-[16px] text-left">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody className="bg-lotion">
          {(props.result as IProductField[]).map((item) => (
            <tr key={item.acf?.code} className="border-b border-bright-gray">
              <td className="p-[16px]">
                <Image
                  className="rounded-xl border border-bright-gray w-[84px] h-[84px] object-cover"
                  height={84}
                  width={84}
                  src={(item.acf?.image as IImageField[])[0]?.url as string}
                  alt={(item.acf?.image as IImageField[])[0]?.alt as string}
                />
              </td>
              <td className="p-[16px] w-4/12">
                <p
                  onClick={() =>
                    window.open(`${item.acf?.sub_category?.ID}/${item.id}`)
                  }
                  className="text-[#3056D3] cursor-pointer"
                >
                  {item.title?.rendered}
                </p>
              </td>
              <td className="p-[16px] w-3/12">{item.title?.rendered}</td>
              <td className="p-[16px]">
                <div className="flex gap-[24px]">
                  <div
                    onClick={() =>
                      window.open(
                        (item.acf?.image as IImageField[])[0]?.url as string
                      )
                    }
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-center">Xem ảnh</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.5 10V16M12.5 16L9.5 13M12.5 16L15.5 13M17.5 21H7.5C6.96957 21 6.46086 20.7893 6.08579 20.4142C5.71071 20.0391 5.5 19.5304 5.5 19V5C5.5 4.46957 5.71071 3.96086 6.08579 3.58579C6.46086 3.21071 6.96957 3 7.5 3H13.086C13.3512 3.00006 13.6055 3.10545 13.793 3.293L19.207 8.707C19.3946 8.89449 19.4999 9.1488 19.5 9.414V19C19.5 19.5304 19.2893 20.0391 18.9142 20.4142C18.5391 20.7893 18.0304 21 17.5 21Z"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-center">Tải PDF</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RowList;
