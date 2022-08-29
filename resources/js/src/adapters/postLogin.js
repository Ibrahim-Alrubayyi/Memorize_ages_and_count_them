import { instance } from "./axios";
export default async function postLogin(user) {
  const url = "/api/auth/login";
  const data = { email: user.email, password: user.password };

  return instance
    .post(url, data)
    .then((res) => {
      return res;
    })
    .catch((rej) => {
      return rej;
    });
}
