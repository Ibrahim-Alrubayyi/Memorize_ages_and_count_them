import { getAllFrindes } from "../../adapters/getAllFrindes";
import { postAddFrinde } from "../../adapters/postAddFrinde";
import { postDeleteFrinde } from "../../adapters/postDeleteFrinde";
import { postEditeFrinde } from "../../adapters/postEditeFrinde";
import formatAge from "../../helpers/formatAgeDate";
import {
  CHANGE_DATE,
  CRUENT_FRINDE,
  GET_ALL_FRINDES,
  NAME_FRINDE,
} from "./types";
import { unauth } from "./userAction";

export const getAllFrindesAction = async (dispatch) => {
  const frindes = await getAllFrindes();
  if (frindes.status === 200) {
    return dispatch({
      type: GET_ALL_FRINDES,
      frindes: frindes.data.UserAndFriends[0].frindes,
    });
  } else {
    return unauth(dispatch);
  }
};
export const addFrinde = (dispatch, user) => {
  const date = formatAge(user.year, user.month, user.day);
  return dispatch({
    type: CHANGE_DATE,
    date,
  });
};
export const addFrindeFromAPI = async (dispatch, user) => {
  await postAddFrinde(user);
  return getAllFrindes(dispatch);
};
export const editeFrinde = async (dispatch, user) => {
  const APIediteFrinde = await postEditeFrinde(user);
  if (APIediteFrinde.status === 200) {
    return getAllFrindesAction(dispatch);
  }
};
export const deleteFrinde = async (dispatch, id) => {
  const APIdeleteFrinde = await postDeleteFrinde(id);
  if (APIdeleteFrinde.status === 200) {
    return getAllFrindesAction(dispatch);
  }
};
export const curentUser = (dispatch, frinde) => {
  return dispatch({
    type: CRUENT_FRINDE,
    name: frinde.name,
    age: frinde.age,
    type_date: frinde.type_date,
    id: frinde.id,
  });
};
export const inputNameEdite = (dispatch, name) => {
  return dispatch({
    type: NAME_FRINDE,
    name: name,
  });
};
export const changeDateFrinde = (dispatch, typeDate, value) => {
  const date = formatAge(value.year, value.month, value.day);
  return dispatch({
    type: CHANGE_DATE,
    date,
    typeDate,
  });
};
