import { combineReducers } from "redux";
import AgeReducer from "./AgeReducer";
import ErorrsReducer from "./ErorrsReducer";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
  age: AgeReducer,
  user: UserReducer,
  errors: ErorrsReducer,
});
export default reducers;
