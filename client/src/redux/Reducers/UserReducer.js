//REDUCER
import {
  EMAIL,
  IS_LOGIN,
  LOGIN,
  LOGOUT,
  NAME,
  PASSWORD,
  REGISTER,
} from "../Actions/types";

const initailState = {
  user: {
    name: "",
    email: "",
    password: "",
  },

  isLogin: false,
};

const UserReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case REGISTER:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    case NAME:
      return {
        ...state,
        user: { ...state.user, name: action.input },
      };
    case EMAIL:
      return {
        ...state,
        user: { ...state.user, email: action.input },
      };
    case PASSWORD:
      return {
        ...state,
        user: { ...state.user, password: action.input },
      };
    default:
      return state;
  }
};
export default UserReducer;
