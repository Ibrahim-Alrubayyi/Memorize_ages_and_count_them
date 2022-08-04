import Axios from "axios";
import { instance } from "./axios";
export default async function postRegister(user) {
  console.log({ ...user });
  const url = "/api/auth/register";
  const data = { name: user.name, email: user.email, password: user.password };

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
  return await instance
    .post(url, data)
    .then((res) => res)
    .catch((rej) => rej);
}
