import { baseApi } from "../../config/baseApi";
import { postEndpoints } from "./postEndpoints";

export const postApi = baseApi.injectEndpoints({
  endpoints: postEndpoints,
});

export const { usePostDataGetAllQuery, usePostDataGetByIdQuery,usePostDataCreateMutation } = postApi;
