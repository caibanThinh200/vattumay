// "use server";

import axios from "axios";

export const getCategoriesData = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
    params: {
      order: "asc",
      acf_format: "standard",
    },
  });
  // .then((res) => {
  //   setCategoryData(res.data);
  // });
};

export const getSingleCategory = async (id: string) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/${id}`, {
    params: {
      acf_format: "standard",
    },
  });
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

export const getSingleSubCategory = async (id: string) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sub_category/${id}`, {
    params: {
      acf_format: "standard",
    },
  });
};

export const getAllProducts = async (filter: any) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    params: {
      orderby: "modified",
      acf_format: "standard",
      ...filter,
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

export const getFilterWidget = async (filter: any) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filter`, {
    params: {
      order: 'asc',
      acf_format: "standard",
      ...filter,
    },
  });
};

export const getFilterValues = async (filter: any) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filter_param`, {
    params: {
      order: 'asc',
      acf_format: "standard",
      ...filter,
    },
  });
};
