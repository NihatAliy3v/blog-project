import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./baseQuery";

export const baseApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
});
