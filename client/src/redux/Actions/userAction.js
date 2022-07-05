import { useSelector } from "react-redux";
import postRegister from "../../adapters/postRegister";
import { FORM_ERORR, REGISTER } from "./types";
export const register = async (dispatch, user) => {
  const registerUser = await postRegister(user);
  if (registerUser.status === 200) {
    return dispatch({
      type: REGISTER,
      token: registerUser.data.token,
    });
    return;
  } else {
    return dispatch({
      type: FORM_ERORR,
      er: registerUser.response.data.errors,
    });
  }
};
