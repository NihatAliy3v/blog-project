import { loginRequestType } from "../../../types/auth/loginRequestType";
export const loginEndpoints = (builder: any) => ({
  login: builder.mutation({
    query: (credentials: loginRequestType) => ({
      url: "/Auth/login",
      method: "POST",
      data: credentials,
    }),
  }),
});
