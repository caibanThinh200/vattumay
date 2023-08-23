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
