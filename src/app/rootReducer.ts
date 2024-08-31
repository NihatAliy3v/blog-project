import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../services/config/baseApi";
import registerReducer from "../features/auth/registerSlice";
import authReducer from "../features/auth/authSlice";
export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  register: registerReducer,
  auth:authReducer
});     
