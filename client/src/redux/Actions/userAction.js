import postLogin from "../../adapters/postLogin";
import postRegister from "../../adapters/postRegister";
import { FORM_ERORR, LOGIN, REGISTER } from "./types";

export const register = async (dispatch, user) => {
  const registerUser = await postRegister(user);
  if (registerUser.status === 200) {
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
    for (let key in loginUser.zresponse.data.errors) {
      arrErr.push(loginUser.response.data.errors[key]);
    }
    return dispatch({
      type: FORM_ERORR,
      er: arrErr,
    });
  }
};
