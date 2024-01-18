import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk(
  "crud/fetchAllUsers",
  async () => {
    const response = await axios.get("http://localhost:4000/users");
    return response.data;
  }
);
export const createNewUser = createAsyncThunk(
  "crud/createNewUser",
  async (user, thunkAPI) => {
    const response = await axios.post("http://localhost:4000/users", user);
    thunkAPI.dispatch(fetchAllUsers());
    return response.data;
  }
);
export const deleteUser = createAsyncThunk(
  "crud/deleteUser",
  async (userId, thunkAPI) => {
    const response = await axios.delete(
      `http://localhost:4000/users/${userId}`
    );
    thunkAPI.dispatch(fetchAllUsers());
    return response.data;
  }
);
export const updateUser = createAsyncThunk(
  "crud/updateUser",
  async (user, thunkAPI) => {
    const response = await axios.put(
      `http://localhost:4000/users/${user.id}`,
      user
    );
    thunkAPI.dispatch(fetchAllUsers());
    return response.data;
  }
);

const initialState = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.listUsers = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(createNewUser.pending, (state, action) => {
        state.isCreating = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isCreating = false;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.isCreating = false;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isDeleting = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isDeleting = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isDeleting = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isUpdating = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isUpdating = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isUpdating = false;
      });
  },
});

export default crudSlice.reducer;
