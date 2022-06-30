import Axios from "axios";
import formatAge from "../helpers/formatAgeDate";
const postAge = async (age, type_data) => {
  const url = "http://127.0.0.1:8000/api/age";
  const ageAfterFromatDate = formatAge(age.year, age.month, age.day);

  return await Axios.post(
    url,
    {
      age: ageAfterFromatDate,
      type_date: type_data,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      return res;
    })
    .catch((rej) => {
      return rej.response;
    });
};

export default postAge;
