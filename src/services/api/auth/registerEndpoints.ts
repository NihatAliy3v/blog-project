import { registerRequestType } from "../../../types/auth/registerRequestType";

export const registerEndpoints = (builder:any) => ({
  register: builder.mutation({
    query: (userData:registerRequestType) => ({
      url: "/Auth/register",
      method: "POST",
      data: userData,
    }),
  }),
});
