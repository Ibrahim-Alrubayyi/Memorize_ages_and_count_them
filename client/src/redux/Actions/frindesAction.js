import { getAllFrindes } from "../../adapters/getAllFrindes";
import { postDeleteFrinde } from "../../adapters/postDeleteFrinde";
import { postEditeFrinde } from "../../adapters/postEditeFrinde";
import { GET_ALL_FRINDES } from "./types";

export const getAllFrindesAction = async (dispatch) => {
  const frindes = await getAllFrindes();

  if (frindes.status === 200) {
    return dispatch({
      type: GET_ALL_FRINDES,
      frindes: frindes.data.UserAndFriends[0].frindes,
    });
  }
};

export const editeFrinde = async (dispatch, user) => {
  const APIediteFrinde = await postEditeFrinde(user);
  if (APIediteFrinde.status === 200) {
    return getAllFrindesAction(dispatch);
  }
};
export const deleteFrinde = async (dispatch, id) => {
  const APIdeleteFrinde = await postDeleteFrinde(id);
  console.log(APIdeleteFrinde);
  if (APIdeleteFrinde.status === 200) {
    return getAllFrindesAction(dispatch);
  }
};
