import Axios from "axios";
export default async function postLogin(user) {
  const url = "http://127.0.0.1:8000/api/auth/login";

  return await Axios.post(
    url,
    { email: user.email, password: user.password },
    { headers: { "Content-Type": "application/json" } }
  )
    .then((res) => {
      return res;
    })
    .catch((rej) => {
      return rej;
    });
}
