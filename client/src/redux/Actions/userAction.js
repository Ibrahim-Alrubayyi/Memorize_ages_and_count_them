import postLogin from "../../adapters/postLogin";
import { postLogout } from "../../adapters/postLogout";
import postRegister from "../../adapters/postRegister";
import { FORM_ERORR, IS_LOGIN, LOGIN, LOGOUT, REGISTER } from "./types";

export const register = async (dispatch, user) => {
  const registerUser = await postRegister(user);
  console.log(registerUser);
  if (registerUser !== undefined && registerUser.status === 200) {
    return dispatch({
      type: REGISTER,
    });
  } else {
    let arrErr = [];
    for (let key in registerUser.response.data.errors) {
      arrErr.push(registerUser.response.data.errors[key]);
    }
    return dispatch({
      type: FORM_ERORR,
      er: arrErr,
    });
  }
};

export const login = async (dispatch, user) => {
  const loginUser = await postLogin(user);

  if (loginUser.status === 200) {
    return dispatch({
      type: LOGIN,
    });
  } else {
    let arrErr = [];
    for (let key in loginUser.response.data.errors) {
      arrErr.push(loginUser.response.data.errors[key]);
    }
    return dispatch({
      type: FORM_ERORR,
      er: arrErr,
    });
  }
};

export const logout = async (dispatch) => {
  const logoutUser = await postLogout();

  if (logoutUser.status === 200) {
    return dispatch({
      type: LOGOUT,
    });
  }
};
export const unauth = (dispatch) => {
  return dispatch({
    type: LOGOUT,
  });
};
export const loginDone = (dispatch) => {
  return dispatch({
    type: IS_LOGIN,
  });
};
