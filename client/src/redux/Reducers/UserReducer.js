//REDUCER

import { LOGIN } from "../Actions/types";

const initailState = {
  user: {},
};

const UserReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return {};

    default:
      return state;
  }
};
export default UserReducer;
