const formatAge = (year, month, day) => {
  if (+month < 10) {
    month = `0${month}`;
  }
  if (+day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};
export default formatAge;
