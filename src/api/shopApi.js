import axiosClient from "./axiosClient";

const shopApi = {
  getAll: (type, params) => {
    console.log(type, params);
    return axiosClient.get(type, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default shopApi;
