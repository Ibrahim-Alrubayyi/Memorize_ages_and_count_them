import { combineReducers } from "redux";
import AgeReducer from "./AgeReducer";
import ErorrsReducer from "./ErorrsReducer";
import FriendsReducer from "./FriendsReducer";
import IsLoadingReducer from "./IsLoadingReducer";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
  age: AgeReducer,
  user: UserReducer,
  errors: ErorrsReducer,
  isLoading: IsLoadingReducer,
  frindes: FriendsReducer,
});
export default reducers;
