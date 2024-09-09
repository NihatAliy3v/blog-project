import { baseApi } from "../../config/baseApi";
import { loginEndpoints } from "./loginEndpoints";

const LoginApi = baseApi.injectEndpoints({
  endpoints: loginEndpoints,
});
export const { useLoginMutation } = LoginApi;
