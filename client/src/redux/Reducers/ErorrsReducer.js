import {
  FORM_ERORR,
  GR_ERORR,
  HJ_ERORR,
  REST_STATE_ERORR_FORM,
} from "../Actions/types";

const initailState = {
  input: {
    hj: [],
    gr: [],
    form: [],
    stateErorrForm: false,
  },
};
const ErorrsReducer = (state = initailState, action) => {
  switch (action.type) {
    case HJ_ERORR:
      return Object.assign(state, {
        input: Object.assign(state.input, { hj: action.er }),
      });

    case GR_ERORR:
      return Object.assign(state, {
        input: Object.assign(state.input, { gr: action.er }),
      });
    case FORM_ERORR:
      // return Object.assign(state, {
      //   input: Object.assign(state.input, {
      //     form: Object.assign(state.input.form, { ...action.er }),
      //   }),
      // });
      return {
        ...state,
        input: {
          ...state.input,
          form: action.er,
          stateErorrForm: true,
        },
      };
    case REST_STATE_ERORR_FORM:
      return {
        ...state,
        input: {
          ...state.input,
          form: [],
          stateErorrForm: false,
        },
      };
    default:
      return state;
  }
};

export default ErorrsReducer;
