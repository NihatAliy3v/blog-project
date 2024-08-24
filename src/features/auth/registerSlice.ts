import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  refreshToken: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      console.log("isledi")
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      localStorage.setItem("access-token", payload.accessToken);
      localStorage.setItem("refresh-token", payload.refreshToken);
      console.log(state,"state")
    },
  },
});

export const { register } = registerSlice.actions;

export default registerSlice.reducer;
