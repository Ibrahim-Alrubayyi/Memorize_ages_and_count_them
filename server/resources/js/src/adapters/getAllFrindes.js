import axios from "axios";
import { instance } from "./axios";
export const getAllFrindes = () => {
  //   const url = "http://127.0.0.1:8000/api/friends";
  //   return axios

  return instance
    .get("/api/friends")
    .then((res) => res)
    .catch((rej) => rej);
};
