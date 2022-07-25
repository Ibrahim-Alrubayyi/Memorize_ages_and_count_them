import Axios from "axios";
import { instance } from "./axios";
export default async function postRegister(user) {
  const url = "/api/auth/register";
  // return await Axios.post(url, user, {
  //   withCredentials: true,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((rej) => {
  //     return rej;
  //   });
  instance
    .post(url, user)
    .then((res) => res)
    .catch((rej) => rej);
}
