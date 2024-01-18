import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./slice/crudSlice";
import otpReducer from "./slice/otpSlice";
import weatherReducer from "./slice/weatherSlice";

const store = configureStore({
  reducer: {
    crud: crudReducer,
    otp: otpReducer,
    weather: weatherReducer,
  },
});

export default store;
