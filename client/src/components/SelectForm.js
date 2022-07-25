import React, { Fragment, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { dayAction, monthAction, yearAction } from "../redux/Actions/ageAction";
import { useDispatch } from "react-redux";
//custem functions
import range from "../helpers/rangeBetweenYears";
import createArayOfNumberToDate from "../helpers/createArayOfNumberToDate";
import HijriYear from "../helpers/HijriYear";
const SelectForm = ({ numDate, nameDate, nameSelect, typeDate }) => {
  const dispatch = useDispatch();
  const GregorianYear = new Date().getFullYear();

  const [years, setYears] = useState([]);
  const currentYear = typeDate === "gr" ? GregorianYear : HijriYear;
  // console.log(years[0]);
  useEffect(() => {
    if (nameDate === "سنه") {
      setYears(range(currentYear, currentYear - 100, -1));
    }
  }, [typeDate]);

  //set values date in store
  const changeStateDate = (e) => {
    if (nameSelect === "year") {
      yearAction(dispatch, e, typeDate);
    } else if (nameSelect === "month") {
      monthAction(dispatch, e, typeDate);
    } else {
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
              <option key={el + 1000} value={el}>
                {nameDate} {el}
              </option>
            ))
          : createArayOfNumberToDate(numDate).map((el, ind) => {
              return (
                <option key={el + 1000} value={el}>
                  {nameDate} {el}
                </option>
              );
            })}
      </Form.Select>
    </Fragment>
  );
};

export default SelectForm;
