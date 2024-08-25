import { baseApi } from "../../config/baseApi";
import { registerEndpoints } from "./registerEndpoints";

export const registerApi = baseApi.injectEndpoints({
  endpoints: registerEndpoints,
});

export const { useRegisterMutation } = registerApi;
