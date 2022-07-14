import { FORM_ERORR, GR_ERORR, HJ_ERORR } from "../Actions/types";

const initailState = {
  input: {
    hj: [],
    gr: [],
    form: [],
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
        },
      };
    default:
      return state;
  }
};

export default ErorrsReducer;
