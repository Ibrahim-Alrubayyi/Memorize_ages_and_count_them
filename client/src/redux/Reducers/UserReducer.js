//REDUCER

import { EMAIL, LOGIN, NAME, PASSWORD, REGISTER } from "../Actions/types";

const initailState = {
  user: {
    name: "",
    email: "",
    password: "",
    token: "",
  },
  alert: false,
};

const UserReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return {};
    case REGISTER:
      return {
        ...state,
        user: { ...state.user, token: action.token },
        alert: true,
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
