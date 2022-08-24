//REDUCER
import {
  EDITE_EMAIL,
  EDITE_NAME,
  EDITE_PASSWORD,
  EMAIL,
  INFO_USER_FROM_USER,
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
  inputs: {
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
    case INFO_USER_FROM_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },

        inputs: {
          ...state.inputs,
          name: action.user.name,
          email: action.user.email,
        },
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

    case EDITE_EMAIL:
      return {
        ...state,
        inputs: { ...state.inputs, email: action.email },
      };
    case EDITE_NAME:
      return {
        ...state,
        inputs: { ...state.inputs, name: action.name },
      };
    case EDITE_PASSWORD:
      return {
        ...state,
        inputs: { ...state.inputs, password: action.passwword },
      };

    default:
      return state;
  }
};
export default UserReducer;
