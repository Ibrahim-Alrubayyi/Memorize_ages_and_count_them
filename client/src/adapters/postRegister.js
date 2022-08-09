import Axios from "axios";
import { instance } from "./axios";
export default async function postRegister(user) {
  console.log({ ...user });
  const url = "/api/auth/register";
  const data = { name: user.name, email: user.email, password: user.password };

  return await instance
    .post(url, data)
    .then((res) => res)
    .catch((rej) => rej);
}
