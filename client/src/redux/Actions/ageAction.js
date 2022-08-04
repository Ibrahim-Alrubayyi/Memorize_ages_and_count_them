import postAge from "../../adapters/postAge";
import {
  AGE,
  DAY,
  GR_ERORR,
  HJ_ERORR,
  MONTH,
  REST_AGE,
  SET_SHOW,
  YEAR,
} from "./types";

export const calcAge = async (dispatch, age, typeDate) => {
  const calcWithAPI = await postAge(age, typeDate);
  if (calcWithAPI.status === 200) {
    // to AgeReducser
    return dispatch({
      type: AGE,
      age: calcWithAPI.data,
      typeDate: typeDate,
    });
  } else {
    let arrErr = [];
    for (let key in calcWithAPI.data.errors) {
      arrErr.push(calcWithAPI.data.errors[key]);
    }
    // to errorReducser
    if (typeDate === "hj") {
      return dispatch({
        type: HJ_ERORR,
        er: arrErr,
      });
    } else {
      return dispatch({
        type: GR_ERORR,
        er: arrErr,
      });
    }
  }
};

export const restAge = (dispatch) => {
  return dispatch({
    type: REST_AGE,
  });
};

export const yearAction = (dispatch, year, dateType) => {
  return dispatch({
    type: YEAR,
    year: year,
    dateType: dateType,
  });
};

export const monthAction = (dispatch, month, dateType) => {
  return dispatch({
    type: MONTH,
    month: month,
    dateType: dateType,
  });
};

export const dayAction = async (dispatch, day, dateType) => {
  return dispatch({
    type: DAY,
    day: day,
    dateType: dateType,
  });
};

export const showHjOrGr = async (dispatch, value) => {
  return dispatch({
    type: SET_SHOW,
    show: value,
  });
};
