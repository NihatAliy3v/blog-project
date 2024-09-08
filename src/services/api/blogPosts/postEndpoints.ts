import { EndpointBuilder } from "@reduxjs/toolkit/query";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { AxiosResponse } from "axios";

export const postEndpoints = (
  builder: EndpointBuilder<BaseQueryFn, string, "api">
) => ({
  postDataGetAll: builder.query({
    query: ({page,size}) => ({
      url: `/BlogPosts/page/${page}/size/${size}`,
    }),
    transformResponse: (
      response,
      meta?: { headers: AxiosResponse["headers"] }
    ) => {
      const paginationHeader = meta?.headers?.["blog-pagination"];
      let paginationData = null;
      if (paginationHeader) {
        paginationData = JSON.parse(paginationHeader);
      }
      console.log("started", paginationData);
      return { data: response, pagination: paginationData };
    },
  }),
  postDataGetById: builder.query({
    query: (id: number) => ({
      url: `/BlogPosts/${id}`,
    }),
  }),
  postDataCreate: builder.mutation({
    query: (data) => ({
      url: `/BlogPosts`,
      method: "POST",
      data: data,
    }),
  }),
});
