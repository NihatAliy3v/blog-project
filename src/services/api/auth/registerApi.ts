import { baseApi } from "../../config/baseApi";

export const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/Auth/register",
        method: "POST",
        data: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
