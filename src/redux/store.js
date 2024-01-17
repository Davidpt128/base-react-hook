import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./CRUD/crudSlice";

const store = configureStore({
  reducer: {
    crud: crudReducer,
  },
});

export default store;
