import {
  CHANGE_DATE,
  CRUENT_FRINDE,
  GET_ALL_FRINDES,
  NAME_FRINDE,
} from "../Actions/types";

const initailState = {
  frindes: [],
  inputs: {
    name: "",
    age: "",
    type_date: "",
    id: "",
  },
};

const FriendsReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_ALL_FRINDES:
      return {
        ...state,
        frindes: action.frindes,
      };
    case CRUENT_FRINDE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: action.name,
          age: action.age,
          type_date: action.type_date,
          id: action.id,
        },
      };
    case NAME_FRINDE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: action.name,
        },
      };
    case CHANGE_DATE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          age: action.date,
          type_date: action.typeDate,
        },
      };
    default:
      return state;
  }
};
export default FriendsReducer;
