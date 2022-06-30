import React, { Fragment, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { dayAction, monthAction, yearAction } from "../redux/Actions/ageAction";
import { useSelector, useDispatch } from "react-redux";
const SelectForm = ({ numDate, nameDate, nameSelect, typeDate }) => {
  const dispatch = useDispatch();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const [years, setYears] = useState([]);
  var GregorianYear = new Date().getFullYear();
  var HijriYear = Math.round((GregorianYear - 622) * (33 / 32)) - 1;

  const createArayOfNumberToDate = (num) => {
    let arr = Array.from(Array(num + 1).keys());
    arr.shift();
    return arr;
  };
  //array [2022 , ...,1972 ]
  const currentYear = typeDate == "gr" ? new Date().getFullYear() : HijriYear;
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  useEffect(() => {
    if (nameDate === "سنه") {
      setYears(range(currentYear, currentYear - 100, -1));
    }
  }, []);

  //set values date
  const changeStateDate = (e) => {
    if (nameSelect === "year") {
      yearAction(dispatch, e, typeDate);
    } else if (nameSelect === "month") {
      // setMonth(e);

      monthAction(dispatch, e, typeDate);
    } else {
      // setDay(e);
      dayAction(dispatch, e, typeDate);
    }
  };

  return (
    <Fragment>
      <Form.Select
        className="mb-3"
        name={nameSelect}
        onChange={(e) => changeStateDate(e.target.value)}
      >
        {nameDate === "سنه"
          ? years.map((el, ind) => (
              <option key={ind} value={el}>
                {nameDate} {el}
              </option>
            ))
          : createArayOfNumberToDate(numDate).map((el, ind) => {
              return (
                <option key={ind} value={el}>
                  {nameDate} {el}
                </option>
              );
            })}
      </Form.Select>
    </Fragment>
  );
};

export default SelectForm;
