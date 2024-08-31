import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { authInitialStateType } from "../../types/auth/authInitialStateType";

const initialState: authInitialStateType = {
  name: "",
  role: "",
  email: "",
  nameidentifier: "",
  expireTime: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (action.payload) {
        const decoded = jwtDecode<JwtPayload>(action.payload);
        if (decoded) {
          state.name = decoded[
            import.meta.env.VITE_NAME as keyof JwtPayload
          ] as string;
          state.role = decoded[
            import.meta.env.VITE_ROLE as keyof JwtPayload
          ] as string;
          state.email = decoded[
            import.meta.env.VITE_EMAIL as keyof JwtPayload
          ] as string;
          state.nameidentifier = decoded[
            import.meta.env.VITE_NAME_IDENTIFIER as keyof JwtPayload
          ] as string;
          state.expireTime = decoded[
            import.meta.env.VITE_EXP as keyof JwtPayload
          ] as string;
        }
        console.log(decoded);
      }
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
