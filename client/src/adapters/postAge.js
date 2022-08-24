import formatAge from "../helpers/formatAgeDate";
import { instance } from "./axios";
const postAge = async (age, type_data) => {
  const url = "/api/age";
  const ageAfterFromatDate = formatAge(age.year, age.month, age.day);

  return instance
    .post(url, { age: ageAfterFromatDate, type_date: type_data })
    .then((res) => res)
    .catch((rej) => rej);
};

export default postAge;
