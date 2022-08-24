import { instance } from "./axios";

export const postAddFrinde = (user) => {
  const url = "/api/friend/add";
  const infoFrinde = {
    name: user.name,
    age: user.age,
    type_date: user.type_date,
  };
  return instance
    .post(url, infoFrinde)
    .then((res) => res)
    .catch((rej) => rej);
};
