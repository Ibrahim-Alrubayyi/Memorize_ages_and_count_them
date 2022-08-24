import { instance } from "./axios";

export const postEditeProfile = (user) => {
  console.log(user);
  const url = "/api/profile/edit";
  return instance
    .post(url, user)
    .then((res) => res)
    .catch((rej) => rej);
};
