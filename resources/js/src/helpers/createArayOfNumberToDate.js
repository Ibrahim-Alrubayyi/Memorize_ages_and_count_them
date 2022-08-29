const createArayOfNumberToDate = (num) => {
  let arr = Array.from(Array(num + 1).keys());
  arr.shift();
  return arr;
};
export default createArayOfNumberToDate;
