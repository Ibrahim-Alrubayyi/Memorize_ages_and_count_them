import Axios from "axios";
export default async function postRegister(user) {
  const url = "http://127.0.0.1:8000/api/auth/register";
  return await Axios.post(url, user, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((rej) => {
      return rej;
    });
}
