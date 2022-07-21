import { GET_ALL_FRINDES } from "../Actions/types";

const initailState = {
  frindes: [],
};

const FriendsReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_ALL_FRINDES:
      return {
        ...state,
        frindes: action.frindes,
      };
    default:
      return state;
  }
};
export default FriendsReducer;
