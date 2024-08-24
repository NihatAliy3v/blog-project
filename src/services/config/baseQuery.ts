import { BaseQueryFn } from "@reduxjs/toolkit/query";

import axiosInstance from "./axiosInstance";

import { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery: BaseQueryFn<{
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
}> = async ({ url, method = "GET", data, params }) => {
  try {
    const result = await axiosInstance({
      url,
      method,
      data,
      params,
    });
    return { data: result.data };
  } catch (error) {
    const err = error as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
export default axiosBaseQuery;
