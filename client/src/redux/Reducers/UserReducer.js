//REDUCER

import { LOGIN } from "../Actions/types";

const initailState = {
  user: {},
};

const UserReducer = (state = initailState, action) => {
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
export default UserReducer;
