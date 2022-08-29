import { getProfile } from "../../adapters/getProfile";
import { postEditeProfile } from "../../adapters/postEditeProfile";
import postLogin from "../../adapters/postLogin";
import { postLogout } from "../../adapters/postLogout";
import postRegister from "../../adapters/postRegister";
import {
  EDITE_EMAIL,
  EDITE_NAME,
  EDITE_PASSWORD,
  FORM_ERORR,
  INFO_USER_FROM_USER,
  IS_LOGIN,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "./types";

export const register = async (dispatch, user) => {
  const registerUser = await postRegister(user);
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

export const getInfoProfile = async (dispatch) => {
  const apiProfile = await getProfile();
  if (apiProfile.status === 200) {
    return dispatch({
      type: INFO_USER_FROM_USER,
      user: apiProfile.data.user,
    });
  }
};

export const postInfoToEdite = async (dispatch, user) => {
  const apiProfile = await postEditeProfile(user);
  if (apiProfile.status === 200) {
    return dispatch({
      type: INFO_USER_FROM_USER,
      user: apiProfile.data.user,
    });
  }
};

export const inputNameEditeUser = (dispatch, name) => {
  return dispatch({
    type: EDITE_NAME,
    name,
  });
};

export const inputEmailEditeUser = (dispatch, email) => {
  return dispatch({
    type: EDITE_EMAIL,
    email,
  });
};

export const inputPasswordEditeUser = (dispatch, password) => {
  return dispatch({
    type: EDITE_PASSWORD,
    password,
  });
};
