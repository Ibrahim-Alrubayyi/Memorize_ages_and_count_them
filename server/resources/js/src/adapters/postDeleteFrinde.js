import { instance } from "./axios";

export const postDeleteFrinde = (id) => {
  const url = "/api/friend/delete";
  return instance
    .post(url, { id })
    .then((res) => res)
    .catch((rej) => rej);
};
