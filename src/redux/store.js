import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./slice/crudSlice";
import otpReducer from "./slice/otpSlice";

const store = configureStore({
  reducer: {
    crud: crudReducer,
    otp: otpReducer,
  },
});

export default store;
