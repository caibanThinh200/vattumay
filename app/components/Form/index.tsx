import { IImageField } from "@/app/interface/category";
import { IProductField } from "@/app/interface/product";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { utils, writeFile, read } from "xlsx";
import moment from "moment";
import axios from "axios";
import parse from "html-react-parser";

interface IContactFormProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct?: IProductField;
}

interface IContactFields {
  name: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<IContactFormProps> = ({
  modalOpen,
  selectedProduct,
  setModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactFields>();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  // useEffect(() => {
  //   axios
  //     .get(process.env.NEXT_PUBLIC_SHEET_BEST_API as string)
  //     .then((res) => console.log(res));
  // }, []);

  const onSubmit: SubmitHandler<IContactFields> = (data) => {
    setModalOpen(false);
    // setTimeout(() => {
    //   setSubmitSuccess(true);
    // }, 1000);

    const excelObj = {
      "hh mm ss dd mm yy": moment().format("hh mm ss DD MM YY"),
      Tên: data?.name,
      "Số điện thoại": data?.phone,
      "Mặt hàng yêu cầu": selectedProduct?.title?.rendered,
      "Số lượng": quantity,
      "Ghi chú": data?.message,
    };
    // const ws = utils.json_to_sheet([excelObj]);
    // const wb = utils.book_new();
    // utils.book_append_sheet(wb, ws, "Data");
    // writeFile(wb, "/book.xlsx");
    axios
      .post(process.env.NEXT_PUBLIC_SHEET_BEST_API as string, excelObj)
      .then((res) => {
        setSubmitSuccess(true);
      });
  };

  const handleIncreament = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const handleDecreament = useCallback(() => {
    setQuantity(quantity - 1);
  }, [quantity]);

  return (
    <div>
      {/* {parse(`<div className="hidden" data-sheet-best="https://sheet.best/api/sheets/eeea2bed-3b11-46ff-8b1d-b0702b3d6f8c">
        <div>
          <h2>{{ Te }}</h2>
          <div>
            <span>
              Price: <b>{{ price }}</b>
            </span>
            <span>
              High: <b>{{ high }}</b>
            </span>
            <span>
              Low: <b>{{ low }}</b>
            </span>
          </div>
        </div>
      </div>`)} */}
      <Transition appear show={modalOpen} as={"div"}>
        <Dialog
          as="div"
          className="relative z-40"
          onClick={() => {
            setModalOpen(false);
          }}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <Transition.Child
            as={"div"}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              style={{
                background: "rgba(27, 27, 27, 0.6)",
              }}
              className="fixed inset-0"
            />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center py-5">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-[24px] font-bold leading-6 p-[24px] pb-4 border-b border-b-bright-gray flex justify-between"
                  >
                    Liên hệ báo giá
                    <svg
                      className="cursor-pointer"
                      onClick={() => {
                        setModalOpen(false);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M8 8L24 24M8 24L24 8L8 24Z"
                        stroke="#4B5563"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Dialog.Title>
                  <form
                    data-sheet-best="https://sheet.best/api/sheets/eeea2bed-3b11-46ff-8b1d-b0702b3d6f8c"
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-[24px] flex flex-col gap-[24px]"
                  >
                    {selectedProduct && (
                      <div className="p-[12px] bg-anti-flash-white rounded-xl border border-dashed border-[#6B7280] flex flex-col gap-[12px]">
                        <p className="font-bold text-[14px] text-[#4B5563]">
                          Sản phẩm
                        </p>
                        <div className="flex gap-4">
                          <div className="w-3/12">
                            <Image
                              width={44}
                              height={44}
                              src={
                                ((selectedProduct?.acf
                                  ?.image as IImageField[]) || [])[0]
                                  ?.url as string
                              }
                              alt={
                                ((selectedProduct?.acf
                                  ?.image as IImageField[]) || [])[0]
                                  ?.alt as string
                              }
                              className="object-cover rounded-xl w-full h-[44px] "
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="line-clamp-1 text-[14px] font-bold overflow-hidden">
                              {selectedProduct?.title?.rendered}
                            </p>
                            <p className="text-[#6B7280] text-[12px] font-light">
                              Code
                            </p>
                            <p className="font-bold text-[#3056D3]">
                              {selectedProduct?.acf?.code}
                            </p>
                          </div>
                          <div className="lg:w-6/12 bg-white rounded-md border border-[#D1D5DB] overflow-hidden items-center grid grid-cols-3 h-fit py-[10px]">
                            <button type="button" onClick={handleIncreament}>
                              +
                            </button>
                            <p className="text-center">{quantity}</p>
                            <button
                              type="button"
                              disabled={quantity === 1}
                              onClick={handleDecreament}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="font-semibold">
                        Tên của bạn/ công ty
                      </label>
                      <div className="bg-anti-flash-white mt-[8px] py-[13px] px-[15px] flex gap-5 rounded-xl w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M9.88432 6.55229C10.3844 6.05219 10.6654 5.37391 10.6654 4.66667C10.6654 3.95942 10.3844 3.28115 9.88432 2.78105C9.38422 2.28095 8.70594 2 7.9987 2C7.29145 2 6.61318 2.28095 6.11308 2.78105C5.61298 3.28115 5.33203 3.95942 5.33203 4.66667C5.33203 5.37391 5.61298 6.05219 6.11308 6.55229C6.61318 7.05238 7.29145 7.33333 7.9987 7.33333C8.70594 7.33333 9.38422 7.05238 9.88432 6.55229Z"
                              stroke="#6B7280"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4.69887 10.7002C5.57404 9.825 6.76102 9.33333 7.9987 9.33333C9.23637 9.33333 10.4234 9.825 11.2985 10.7002C12.1737 11.5753 12.6654 12.7623 12.6654 14H3.33203C3.33203 12.7623 3.8237 11.5753 4.69887 10.7002Z"
                              stroke="#6B7280"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="w-10/12">
                          <input
                            {...register("name", { required: true })}
                            className="text-auto-metal-saurus bg-inherit w-full outline-none"
                            placeholder="Nhập tên của bạn hoặc công ty"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold">Số điện thoại</label>
                      <div className="bg-anti-flash-white mt-[8px] py-[13px] px-[15px] flex gap-5 rounded-xl w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V4C2 9.52267 6.47733 14 12 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V10.4807C14 10.3407 13.956 10.2043 13.8742 10.0907C13.7923 9.97714 13.6768 9.89223 13.544 9.848L10.5487 8.84933C10.3964 8.79873 10.2311 8.80472 10.0829 8.86619C9.93473 8.92766 9.8137 9.0405 9.742 9.184L8.98867 10.6887C7.35631 9.95112 6.04888 8.64369 5.31133 7.01133L6.816 6.258C6.9595 6.1863 7.07234 6.06527 7.13381 5.9171C7.19528 5.76893 7.20127 5.60356 7.15067 5.45133L6.152 2.456C6.1078 2.3233 6.02299 2.20787 5.90957 2.12603C5.79615 2.0442 5.65986 2.00011 5.52 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052Z"
                              stroke="#6B7280"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="w-10/12">
                          <input
                            {...register("phone", { required: true })}
                            className="text-auto-metal-saurus bg-inherit w-full outline-none"
                            placeholder="Nhập số điện thoại của bạn"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold">Lời nhắn thêm</label>
                      <div className="bg-anti-flash-white mt-[8px] py-[13px] px-[15px] flex gap-5 rounded-xl w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M5.33333 8.00008H5.34M8 8.00008H8.00667M10.6667 8.00008H10.6733M14 8.00008C14 10.9454 11.3133 13.3334 8 13.3334C7.01909 13.3368 6.04986 13.1206 5.16333 12.7007L2 13.3334L2.93 10.8534C2.34133 10.0281 2 9.04941 2 8.00008C2 5.05475 4.68667 2.66675 8 2.66675C11.3133 2.66675 14 5.05475 14 8.00008Z"
                              stroke="#6B7280"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="w-10/12">
                          <textarea
                            {...register("message", { required: false })}
                            className="text-auto-metal-saurus bg-inherit w-full outline-none"
                            placeholder="Nhập lời nhắn của bạn muốn gởi cho chúng tôi"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-begonia-gradient px-[24px] py-[10px] font-bold text-white rounded-xl"
                      >
                        Gởi thông tin
                      </button>
                    </div>
                  </form>
                  <div className="p-[24px] flex gap-5 justify-center bg-begonia-gradient text-white items-center">
                    <div>
                      <Image
                        className="inline mr-3"
                        alt="zalo"
                        src={"/image/zalo.png"}
                        height={32}
                        width={32}
                      />
                      <span>0858 543 323</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#F9FAFB" />
                    </svg>
                    <div className="">
                      <svg
                        className="inline mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V6C3 14.284 9.716 21 18 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15.721C21.0001 15.511 20.934 15.3064 20.8112 15.136C20.6885 14.9657 20.5152 14.8383 20.316 14.772L15.823 13.274C15.5947 13.1981 15.3466 13.2071 15.1244 13.2993C14.9021 13.3915 14.7205 13.5607 14.613 13.776L13.483 16.033C11.0345 14.9267 9.07332 12.9655 7.967 10.517L10.224 9.387C10.4393 9.27945 10.6085 9.0979 10.7007 8.87564C10.7929 8.65339 10.8019 8.40534 10.726 8.177L9.228 3.684C9.16171 3.48496 9.03449 3.3118 8.86436 3.18905C8.69422 3.0663 8.48979 3.00016 8.28 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579Z"
                          stroke="#F9FAFB"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>0858 543 323</span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={submitSuccess} as={"div"}>
        <Dialog
          as="div"
          className="relative z-40"
          onClick={() => {
            setSubmitSuccess(false);
          }}
          onClose={() => {
            setSubmitSuccess(false);
          }}
        >
          <Transition.Child
            as={"div"}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center py-5">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full p-[24px] max-w-md transform items-center overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all flex flex-col gap-[24px]">
                  <svg
                    width="124"
                    height="120"
                    viewBox="0 0 124 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M106.599 0H13.932C10.6559 0 8 2.65586 8 5.93203V65.696C8 68.9722 10.6559 71.6281 13.932 71.6281H106.599C109.875 71.6281 112.531 68.9722 112.531 65.696V5.93203C112.531 2.65586 109.875 0 106.599 0Z"
                      fill="url(#paint0_linear_71_19340)"
                    />
                    <path
                      d="M110.124 70.3622C110.873 69.7901 111.479 69.0531 111.896 68.2085C112.313 67.3638 112.53 66.4343 112.529 65.4923V6.1357C112.529 4.50841 111.883 2.94777 110.732 1.79711C109.582 0.646438 108.021 0 106.394 0L47.0234 0L109.998 70.3158L110.124 70.3622Z"
                      fill="url(#paint1_linear_71_19340)"
                    />
                    <path
                      d="M73.5059 0H14.1357C12.5084 0 10.9478 0.646438 9.79711 1.79711C8.64644 2.94777 8 4.50841 8 6.1357V65.4923C7.99935 66.406 8.20319 67.3083 8.59658 68.1329C8.98996 68.9575 9.56292 69.6837 10.2734 70.2581L10.5313 70.3158L73.5059 0Z"
                      fill="url(#paint2_linear_71_19340)"
                    />
                    <path
                      d="M106.396 0H14.1357C12.5084 0 10.9478 0.646438 9.79711 1.79711C8.64644 2.94777 8 4.50841 8 6.1357L8 8.49422L52.2772 39.0045C54.6266 40.6234 57.4124 41.4903 60.2656 41.4903C63.1188 41.4903 65.9047 40.6234 68.2541 39.0045L112.531 8.49422V6.1357C112.531 4.50841 111.885 2.94777 110.734 1.79711C109.583 0.646438 108.023 0 106.396 0Z"
                      fill="url(#paint3_linear_71_19340)"
                    />
                    <path
                      d="M30.8758 115.41C30.4913 115.41 30.1159 115.292 29.8008 115.072C29.4856 114.852 29.2457 114.54 29.1138 114.179C28.9819 113.817 28.9642 113.424 29.0632 113.053C29.1622 112.681 29.373 112.349 29.6672 112.101L55.5862 90.5584C55.7738 90.3942 55.9921 90.2692 56.2286 90.1904C56.465 90.1117 56.7148 90.0809 56.9633 90.0998C57.2117 90.1187 57.454 90.1869 57.6758 90.3005C57.8976 90.4141 58.0945 90.5708 58.2551 90.7614C58.4156 90.952 58.5366 91.1727 58.6108 91.4106C58.6851 91.6485 58.7112 91.8988 58.6876 92.1469C58.664 92.3949 58.5912 92.6358 58.4734 92.8555C58.3557 93.0751 58.1953 93.269 58.0017 93.4259L32.0829 114.969C31.7453 115.255 31.3177 115.411 30.8758 115.41Z"
                      fill="#23BC84"
                    />
                    <path
                      d="M52.8603 111.329C52.4788 111.33 52.1064 111.213 51.7926 110.996C51.4789 110.779 51.2389 110.472 51.1045 110.115C50.9702 109.758 50.9479 109.368 51.0407 108.998C51.1335 108.628 51.337 108.295 51.624 108.044L58.0041 102.215C58.1892 102.052 58.4047 101.926 58.6382 101.846C58.8718 101.767 59.1188 101.734 59.3651 101.749C59.6115 101.765 59.8523 101.829 60.0737 101.938C60.2952 102.048 60.4929 102.199 60.6555 102.385C60.8182 102.571 60.9426 102.787 61.0216 103.02C61.1006 103.254 61.1326 103.502 61.1158 103.748C61.0991 103.994 61.0339 104.235 60.9239 104.456C60.814 104.677 60.6615 104.874 60.4752 105.036L54.0962 110.865C53.7546 111.165 53.3151 111.33 52.8603 111.329Z"
                      fill="#23BC84"
                    />
                    <path
                      d="M59.8125 74.2419L71.6416 102.577L93.2527 70.1574L123.635 41.2086L59.8125 74.2419Z"
                      fill="#23BC84"
                    />
                    <path
                      d="M123.638 41L61.2876 77.3696L42.9414 72.6102L123.638 41Z"
                      fill="#34D399"
                    />
                    <path
                      d="M102.035 65L72 102.525L75.5444 81.0322L102.035 65Z"
                      fill="#34D399"
                    />
                    <path
                      d="M123.636 41.2086C123.653 41.1554 123.676 41.1148 123.636 41.1542L75.1875 81.0842L105.2 89.254L123.636 41.2086Z"
                      fill="#34D399"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_71_19340"
                        x1="-16.9341"
                        y1="-13.8481"
                        x2="167.756"
                        y2="95.6961"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CA4B5C" />
                        <stop offset="1" stop-color="#811423" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_71_19340"
                        x1="31.3982"
                        y1="-13.6034"
                        x2="168.259"
                        y2="38.1815"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F96C7F" />
                        <stop offset="1" stop-color="#B42A3D" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_71_19340"
                        x1="-7.62527"
                        y1="-13.5944"
                        x2="129.213"
                        y2="38.2161"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F96C7F" />
                        <stop offset="1" stop-color="#B42A3D" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_71_19340"
                        x1="-16.9341"
                        y1="-8.02147"
                        x2="104.943"
                        y2="116.775"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFBEC7" />
                        <stop offset="1" stop-color="#C25B69" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p className="font-bold text-center">
                    Thông tin của bạn đã được gởi đi. Nhân viên của chúng tôi sẽ
                    liên hệ lại bạn sớm nhất
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                      }}
                      type="submit"
                      className="bg-begonia-gradient px-[24px] py-[10px] font-bold text-white rounded-xl"
                    >
                      Đóng
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

ContactForm.defaultProps = {
  modalOpen: false,
};

export default ContactForm;
