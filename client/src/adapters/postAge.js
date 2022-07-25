import Axios from "axios";
import formatAge from "../helpers/formatAgeDate";
import { instance } from "./axios";
const postAge = async (age, type_data) => {
  const url = "/api/age";
  const ageAfterFromatDate = formatAge(age.year, age.month, age.day);

  // return await Axios.post(
  //   url,
  //   {
  //     age: ageAfterFromatDate,
  //     type_date: type_data,
  //   },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((rej) => {
  //     return rej.response;
  //   });
  instance
    .post(url, ageAfterFromatDate)
    .then((res) => res)
    .catch((rej) => rej);
};

export default postAge;
