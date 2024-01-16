import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import crudReducer from "./CRUD/crud.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  crud: crudReducer,
});

export default rootReducer;
