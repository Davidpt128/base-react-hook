import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgOtp: "******",
  inputOtp: "",
  isDisableClear: true,
  isDisableConfirm: true,
  isPlaying: false,
  keyCountDown: 0,
  numInputs: 6,
};

export const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    clickGenerate: (state) => {
      state.orgOtp = Math.floor(100000 + Math.random() * 900000);
      state.inputOtp = "";
      state.isDisableClear = true;
      state.isDisableConfirm = true;
      state.isPlaying = true;
      state.keyCountDown += 1;
    },
    enterInput: (state, action) => {
      state.inputOtp = action.payload;
      state.isDisableClear = action.payload.length !== 0 ? false : true;
      state.isDisableConfirm =
        action.payload.length === state.numInputs && state.isPlaying
          ? false
          : true;
    },
    onCompleteCountDown: (state) => {
      state.isDisableConfirm = true;
      state.isPlaying = false;
    },
    clickBtnClear: (state) => {
      state.inputOtp = "";
      state.isDisableConfirm = true;
      state.isDisableClear = true;
    },
  },
  extraReducers: (builder) => {},
});

export const { clickGenerate, enterInput, onCompleteCountDown, clickBtnClear } =
  otpSlice.actions;

export default otpSlice.reducer;
