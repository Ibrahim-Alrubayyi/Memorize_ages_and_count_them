import { REST_STATE_ERORR_FORM } from "./types";

export const restErForm = (dispatch) => {
  return dispatch({
    type: REST_STATE_ERORR_FORM,
  });
};
