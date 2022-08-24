import { instance } from "./axios";

export const postLogout = () => {
  const url = "/api/logout";

  return instance
    .get(url)
    .then((res) => res)
    .catch((rej) => rej);
};
