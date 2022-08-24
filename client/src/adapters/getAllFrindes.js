import { instance } from "./axios";
export const getAllFrindes = () => {
  return instance
    .get("/api/friends")
    .then((res) => res)
    .catch((rej) => rej);
};
