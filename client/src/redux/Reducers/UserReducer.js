//REDUCER

import { EMAIL, LOGIN, NAME, PASSWORD, REGISTER } from "../Actions/types";
function checkValueIsllogin(state) {
  if (!localStorage.getItem("isLogin")) {
    localStorage.setItem("isLogin", false);
  }
  if (state === "isLogin") {
    localStorage.setItem("isLogin", true);
  }
  return localStorage.getItem("isLogin");
}

const initailState = {
  user: {
    name: "",
    email: "",
    password: "",
  },

  isLogin: checkValueIsllogin(),
};

const UserReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: checkValueIsllogin("isLogin"),
      };
    case REGISTER:
      return {
        ...state,
        isLogin: checkValueIsllogin("isLogin"),
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
