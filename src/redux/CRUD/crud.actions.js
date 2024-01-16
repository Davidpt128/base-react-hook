import axios from "axios";
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "./crud.types";

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get("http://localhost:4000/users");
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError());
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (listUsers) => {
  return {
    type: FETCH_USERS_SUCCESS,
    listUsers,
  };
};
export const fetchUsersError = () => {
  return {
    type: FETCH_USERS_ERROR,
  };
};

export const createNewUser = (user) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      await axios.post("http://localhost:4000/users", user);
      dispatch(createUserSuccess());
      dispatch(fetchAllUsers());
    } catch (error) {
      console.log(error);
      dispatch(createUserError());
    }
  };
};

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};
export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};
export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch(deleteUserRequest());
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`);
      dispatch(deleteUserSuccess());
      dispatch(fetchAllUsers());
    } catch (error) {
      console.log(error);
      dispatch(deleteUserError());
    }
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};
export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};
export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
