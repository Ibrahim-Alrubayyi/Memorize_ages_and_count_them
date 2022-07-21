import Axios from "axios";
import { instance } from "./axios";
export default async function postLogin(user) {
  const url = "/api/auth/login";
  const data = { email: user.email, password: user.password };
  // return await Axios.post(
  //   url,
  //   { email: user.email, password: user.password },
  //   {
  //     withCredentials: true,
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((rej) => {
  //     return rej;
  // });
  return instance
    .post(url, data)
    .then((res) => {
      return res;
    })
    .catch((rej) => {
      return rej;
    });
}
