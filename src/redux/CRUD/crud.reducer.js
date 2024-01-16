import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from "./crud.types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
  isDeleting: false,
};

const crudReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        listUsers: action.listUsers,
        isLoading: false,
        isError: false,
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case CREATE_USER_SUCCESS:
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        isDeleting: true,
      };

    case DELETE_USER_SUCCESS:
    case DELETE_USER_ERROR:
      return {
        ...state,
        isDeleting: false,
      };

    default:
      return state;
  }
};

export default crudReducer;
