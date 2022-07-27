import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import SelectForm from "../components/SelectForm";
import { calcAge } from "../redux/Actions/ageAction";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { isLoading } from "../redux/Actions/isLoading";
import { LODING, NOT_LODING } from "../redux/Actions/types";

const FormAge = ({ typeDate, nameForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoDateHj = useSelector((state) => state.age.hj);
  const infoDateGr = useSelector((state) => state.age.gr);

  const calcAgeAndRediarct = async () => {
    isLoading(dispatch, LODING);
    typeDate === "hj"
      ? await calcAge(dispatch, infoDateHj, typeDate)
      : await calcAge(dispatch, infoDateGr, typeDate);
    isLoading(dispatch, NOT_LODING);

    navigate("/age");
  };

  return (
    <Fragment>
      <h1 className="color-white"> عمرك {nameForm}</h1>
      <p>سوف يتم حساب عمرك الهجري و ميلادي</p>

      <SelectForm nameDate="سنه" nameSelect="year" typeDate={typeDate} />
      <SelectForm
        numDate={12}
        nameDate="شهر"
        nameSelect="month"
        typeDate={typeDate}
      />
      <SelectForm
        numDate={31}
        nameDate="يوم"
        nameSelect="day"
        typeDate={typeDate}
      />
      <Button
        className="bg-white color-black border-dark border-3"
        onClick={() => calcAgeAndRediarct()}
      >
        احسب
      </Button>
    </Fragment>
  );
};

export default FormAge;
