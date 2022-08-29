//REDUCER

import HijriYear from "../../helpers/HijriYear";
import { AGE, DAY, MONTH, REST_AGE, SET_SHOW, YEAR } from "../Actions/types";

const initailState = {
  gr: { year: new Date().getFullYear(), month: "1", day: "1" },
  hj: { year: HijriYear, month: "1", day: "1" },
  // info will set from api
  calculatedAge: {
    alert: false,
    dateGr: "",
    ageGr: [{ day: "" }, { month: "" }, { year: "" }],
    ageHj: [{ day: "" }, { month: "" }, { year: "" }],
    typeDate: "",
  },
  show: "hj",
};

const AgeReducer = (state = initailState, action) => {
  switch (action.type) {
    case AGE:
      return {
        ...state,
        calculatedAge: {
          ...state.calculatedAge,
          alert: action.age.alert,
          dateGr: action.age.dateGr,
          ageGr: action.age.ageGr,
          ageHj: action.age.ageHj,
          typeDate: action.typeDate,
        },
      };
    case SET_SHOW:
      return action.show === "hj"
        ? { ...state, show: "hj" }
        : { ...state, show: "gr" };
    case REST_AGE:
      return {
        ...state,
        gr: { year: new Date().getFullYear(), month: "1", day: "1" },
        hj: { year: HijriYear, month: "1", day: "1" },
      };
    case YEAR:
      if (action.dateType === "hj") {
        return {
          ...state,

          hj: {
            // month: state.hj.month,
            // day: state.hj.day,
            ...state.hj,
            year: action.year,
          },
        };
      } else {
        return {
          ...state,

          gr: {
            year: action.year,
            month: state.gr.month,
            day: state.gr.day,
          },
        };
      }

    case MONTH:
      if (action.dateType === "hj") {
        return {
          ...state,

          hj: {
            year: state.hj.year,
            month: action.month,
            day: state.hj.day,
          },
        };
      } else {
        return {
          ...state,

          gr: {
            year: state.gr.year,
            month: action.month,
            day: state.gr.day,
          },
        };
      }
    case DAY:
      if (action.dateType === "hj") {
        return {
          ...state,

          hj: {
            year: state.hj.year,
            month: state.hj.month,
            day: action.day,
          },
        };
      } else {
        return {
          ...state,

          gr: {
            year: state.gr.year,
            month: state.gr.month,
            day: action.day,
          },
        };
      }
    default:
      return state;
  }
};
export default AgeReducer;
