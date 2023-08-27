// "use server";

import axios from "axios";

export const getCategoriesData = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
    params: {
      acf_format: "standard",
    },
  });
  // .then((res) => {
  //   setCategoryData(res.data);
  // });
};

export const getSubCategoriesData = async (filter: any) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sub_category`, {
    params: {
      acf_format: "standard",
      ...filter,
    },
  });
  // .then((res) => {
  //   setCategoryData(res.data);
  // });
};

export const getAllProducts = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    params: {
      acf_format: "standard",
    },
  });
};

export const getDetailProduct = async (id: string) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
    params: {
      acf_format: "standard",
    },
  });
};
