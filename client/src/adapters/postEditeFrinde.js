import { instance } from "./axios";

export const postEditeFrinde = (user) => {
  const url = "/api/friend/delete";
  const infoFrinde = {
    name: user.name,
    age: user.name,
    type_date: user.type_date,
    id: user.id,
  };
  return instance
    .post(url, infoFrinde)
    .then((res) => res)
    .catch((rej) => rej);
};
