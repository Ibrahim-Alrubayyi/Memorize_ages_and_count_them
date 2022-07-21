import { getAllFrindes } from "../../adapters/getAllFrindes";
import { GET_ALL_FRINDES } from "./types";

export const getAllFrindesAction = async (dispatch) => {
  const frindes = await getAllFrindes();
  console.log(frindes);
  return dispatch({
    type: GET_ALL_FRINDES,
    frindes,
  });
};
