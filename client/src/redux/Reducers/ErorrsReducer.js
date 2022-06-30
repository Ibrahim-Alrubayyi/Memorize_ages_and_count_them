import { LOGIN } from "../Actions/types";

const initailState = {
  input: {
    hj: [],
    gr: [],
  },
};

const ErorrsReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        // logged: true,
      };

    default:
      return state;
  }
};

export default ErorrsReducer;
