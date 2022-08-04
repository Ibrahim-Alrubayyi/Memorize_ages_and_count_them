import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SelectForm from "../components/SelectForm";
import { calcAge } from "../redux/Actions/ageAction";
import { useNavigate } from "react-router-dom";
import { isLoading } from "../redux/Actions/isLoading";
import { LODING, NOT_LODING } from "../redux/Actions/types";
import { editeFrinde, addFrindeFromAPI } from "../redux/Actions/frindesAction";

const FormAge = ({ typeDate, nameForm, addFrinde }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoDateHj = useSelector((state) => state.age.hj);
  const infoDateGr = useSelector((state) => state.age.gr);
  const cruentFrinde = useSelector((state) => state.frindes.inputs);

  const calcAgeAndRediarct = async () => {
    isLoading(dispatch, LODING);
    typeDate === "hj"
      ? await calcAge(dispatch, infoDateHj, typeDate)
      : await calcAge(dispatch, infoDateGr, typeDate);
    isLoading(dispatch, NOT_LODING);

    navigate("/age");
  };
  //edite frinde
  const handleRequestEdit = async () => {
    isLoading(dispatch, LODING);
    await editeFrinde(dispatch, cruentFrinde);
    isLoading(dispatch, NOT_LODING);

    navigate("/profile");
  };
  //add new frinde
  const handleRequestAdd = async () => {
    isLoading(dispatch, LODING);
    await addFrindeFromAPI(dispatch, cruentFrinde);
    isLoading(dispatch, NOT_LODING);
    navigate("/profile");
  };

  return (
    <Fragment>
      <h1 className="color-white"> عمرك {nameForm}</h1>
      {addFrinde ? (
        <p>سوف يتم حساب عمر صديقك الهجري وميلادي</p>
      ) : (
        <p>سوف يتم حساب عمرك الهجري و ميلادي</p>
      )}

      <SelectForm
        nameDate="سنه"
        nameSelect="year"
        typeDate={typeDate}
        addFrinde={addFrinde}
      />
      <SelectForm
        numDate={12}
        nameDate="شهر"
        nameSelect="month"
        typeDate={typeDate}
        addFrinde={addFrinde}
      />
      <SelectForm
        numDate={31}
        nameDate="يوم"
        nameSelect="day"
        typeDate={typeDate}
        addFrinde={addFrinde}
      />
      {addFrinde === true ? (
        <Button
          className="bg-white color-black border-dark border-3"
          onClick={() => handleRequestEdit()}
        >
          عدل بيانات صديقك
        </Button>
      ) : addFrinde === "add" ? (
        <Button
          className="bg-white color-black border-dark border-3"
          onClick={() => handleRequestAdd()}
        >
          اضف صديق جديد
        </Button>
      ) : (
        <Button
          className="bg-white color-black border-dark border-3"
          onClick={() => calcAgeAndRediarct()}
        >
          احسب
        </Button>
      )}
    </Fragment>
  );
};

export default FormAge;
