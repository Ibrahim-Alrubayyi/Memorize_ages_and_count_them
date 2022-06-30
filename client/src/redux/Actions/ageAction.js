import postAge from "../../adapters/postAge";
import {
  CALC_AGE_FROM_API,
  DAY,
  GR_ERORR,
  HJ_ERORR,
  MONTH,
  REST_AGE,
  YEAR,
} from "./types";

export const calcAge = async (dispatch, age, typeDate) => {
  const calcWithAPI = await postAge(age, typeDate);
  console.log(calcWithAPI);
  if (calcWithAPI.status === 200) {
    // to AgeReducser
    return dispatch({
      type: CALC_AGE_FROM_API,
      age: calcWithAPI.data,
      typeDate: typeDate,
    });
  } else {
    // to errorReducser
    return dispatch({
      type: typeDate === "hj" ? HJ_ERORR : GR_ERORR,
      erorr: calcWithAPI.data.errors,
    });
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
