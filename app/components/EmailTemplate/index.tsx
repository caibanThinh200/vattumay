"use client";

import { getAllProducts } from "@/app/action";
import { IImageField } from "@/app/interface/category";
import { IProductField } from "@/app/interface/product";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

interface IEmailTemplate {
  products: Array<Array<IProductField>>;
}

const EmailTemplate: React.FC<IEmailTemplate> = ({ products }) => {
  const [productSlice, setProductSlice] = useState<Array<Array<IProductField>>>(
    []
  );

  return (
    <div>
      <div
        style={{
          marginBottom: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            width: "33%",
          }}
        >
          <Image
            height={40}
            width={40}
            src="https://vattumay.com/images/logo.jpeg"
            alt="Logo"
          />
          <h2 style={{ fontWeight: 700 }}>VATTUMAY</h2>
        </div>
      </div>
      <div
        style={{
          background: "#F96C7F",
          padding: 16,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          color: "#fff",
        }}
        className="p-4 bg-begonia rounded-t-lg text-white"
      >
        <h2 className="font-bold text-xl">Sản phẩm mới nhất</h2>
      </div>
      <table
        style={{
          border: "1px solid #E5E7EB",
          width: "100%",
          padding: 16,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <tbody
          style={{
            border: "1px solid #E5E7EB",
            // display: "grid",
            // display: "flex",
            // flexWrap: "wrap",
            // justifyContent: 'center',
            //   gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            padding: 16,
          }}
          // className="border border-bright-gray rounded-b-lg p-4 grid grid-cols-3 gap-4"
        >
          {products.map((slice, index) => (
            <tr key={index}>
              {slice.map((product, index) => (
                <td
                  align="center"
                  key={index}
                  style={{
                    // width: "30%",
                    boxShadow: "0px 0px 8px 0px rgba(53, 53, 53, 0.08)",
                    borderRadius: 30,
                    overflow: "hidden",
                    margin: 16,
                    textAlign: "center",
                    // padding: 16,
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      `/san-pham/${product?.acf?.sub_category?.acf?.category}/${product?.acf?.sub_category?.acf?.code}/${product?.id}`
                    )
                  }
                  // href={`/san-pham/${product?.acf?.sub_category?.acf?.category}/${product?.acf?.sub_category?.acf?.code}/${product?.acf?.code}`}
                  // className="rounded-xl group transition-all overflow-hidden flex relative cursor-pointer"
                >
                  <div style={{ height: 231 }} className="h-[231px]">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      className="w-full h-full object-cover"
                      src={
                        (product.acf?.image as IImageField[])[0]?.url as string
                      }
                      alt={
                        (product.acf?.image as IImageField[])[0]?.alt as string
                      }
                      height={315}
                      width={300}
                    />
                  </div>
                  <div
                    style={{
                      padding: 14,
                      gap: 12,
                      display: "flex",
                      justifyItems: "center",
                      justifyContent: "space-between",
                    }}
                    className="p-[14px] group-hover:bg-begonia-gradient gap-3 transition-all group-hover:text-white flex items-center justify-between"
                  >
                    <p
                      style={{
                        wordBreak: "break-word",
                        fontWeight: 700,
                        width: "100%",
                      }}
                      className="w-full font-bold line-clamp-2"
                    >
                      {product.title?.rendered}
                    </p>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: 60,
          background: "#F96C7F",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            // width: "33%",
            justifyContent: "center",
          }}
        >
          <Image
            height={40}
            width={40}
            src="https://vattumay.com/images/logo.jpeg"
            alt="Logo"
          />
          <h2 style={{ fontWeight: 700, color: "#fff" }}>VATTUMAY</h2>
        </div>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
            }}
            className="flex gap-2"
          >
            <div className="flex flex-col">
              <p
                style={{
                  color: "#fff",
                  fontWeight: 200,
                }}
                className="font-light"
              >
                Số điện thoại
              </p>
              <p
                style={{
                  color: "#fff",
                  fontWeight: 700,
                }}
                className="font-bold"
              >
                0818 598 088
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
            }}
            className="flex gap-2"
          >
            <div className="flex flex-col">
              <p
                style={{
                  color: "#fff",
                  fontWeight: 200,
                }}
                className="font-light"
              >
                Email liên hệ
              </p>
              <p
                style={{
                  color: "#fff",
                  fontWeight: 700,
                }}
                className="font-bold"
              >
                thietbivattumay@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
