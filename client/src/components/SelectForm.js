import React, { Fragment, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  dayAction,
  monthAction,
  yearAction,
} from "../redux-store/Actions/ageAction";
import { useDispatch, useSelector } from "react-redux";
//custem functions
import range from "../helpers/rangeBetweenYears";
import createArayOfNumberToDate from "../helpers/createArayOfNumberToDate";
import HijriYear from "../helpers/HijriYear";
import { changeDateFrinde } from "../redux-store/Actions/frindesAction";
const SelectForm = ({ numDate, nameDate, nameSelect, typeDate, addFrinde }) => {
  const dispatch = useDispatch();
  const GregorianYear = new Date().getFullYear();

  const infoDateHj = useSelector((state) => state.age.hj);
  const infoDateGr = useSelector((state) => state.age.gr);

  const [years, setYears] = useState([]);
  const currentYear = typeDate === "gr" ? GregorianYear : HijriYear;
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

  //when mode is edite this handle values date
  useEffect(() => {
    if (addFrinde === true || addFrinde === "add") {
      let infoFrinde = typeDate === "hj" ? infoDateHj : infoDateGr;
      changeDateFrinde(dispatch, typeDate, infoFrinde);
    }
  }, [infoDateHj, infoDateGr]);

  const handleYearsInTagSelect = () => {
    if (nameDate === "سنه") {
      return years.map((el) => {
        return (
          <option key={el + 7000} value={el}>
            {nameDate} {el}
          </option>
        );
      });
    } else {
      return createArayOfNumberToDate(numDate).map((el) => {
        if (nameSelect === "month") {
          return (
            <option key={el + 2000} value={el}>
              {nameDate} {el}
            </option>
          );
        } else {
          return (
            <option key={el + 1000} value={el}>
              {nameDate} {el}
            </option>
          );
        }
      });
    }
  };
  return (
    <Fragment>
      <Form.Select
        className="mb-3"
        name={nameSelect}
        onChange={(e) => changeStateDate(e.target.value)}
      >
        {handleYearsInTagSelect()}
      </Form.Select>
    </Fragment>
  );
};

export default SelectForm;
