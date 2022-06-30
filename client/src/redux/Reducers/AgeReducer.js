//REDUCER

import { AGE, DAY, MONTH, REST_AGE, YEAR } from "../Actions/types";

const initailState = {
  gr: { year: "", month: "", day: "" },
  hj: { year: "", month: "", day: "" },
};

const AgeReducer = (state = initailState, action) => {
  switch (action.type) {
    case REST_AGE:
      return {
        ...state,
        gr: { year: "", month: "", day: "" },
        hj: { year: "", month: "", day: "" },
      };
    case YEAR:
      if (action.dateType === "hj") {
        return {
          ...state,

          hj: {
            year: action.year,
            month: state.hj.month,
            day: state.hj.day,
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
