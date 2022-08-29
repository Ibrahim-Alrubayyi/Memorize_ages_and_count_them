import { LODING, NOT_LODING } from "../Actions/types";

const initailState = {
  isLoading: false,
};

const IsLoadingReducer = (state = initailState, action) => {
  switch (action.type) {
    case LODING:
      return {
        ...state,
        isLoading: true,
      };

    case NOT_LODING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default IsLoadingReducer;
