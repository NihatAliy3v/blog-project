import { createSlice } from "@reduxjs/toolkit";
import Cookies from "cookies-ts";
import { tokenResponseType } from "../../types/auth/tokenResponseType";
const initialState: tokenResponseType = {
  accessToken: "",
  refreshToken: "",
  loggedIn: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      const cookies = new Cookies();
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.loggedIn = true;
      cookies.set("access-token", payload.accessToken);
      cookies.set("refresh-token", payload.refreshToken);
    },
    logout: (state) => {
      const cookies = new Cookies();
      state.accessToken = null;
      state.refreshToken = null;
      state.loggedIn = false;
      cookies.remove("access-token");
      cookies.remove("refresh-token");
    },
  },
});

export const { register,logout } = registerSlice.actions;

export default registerSlice.reducer;
