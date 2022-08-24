import { instance } from "./axios";

export const getProfile = () => {
  const url = "/api/profile";
  return instance
    .get(url)
    .then((res) => res)
    .catch((rej) => rej);
};
