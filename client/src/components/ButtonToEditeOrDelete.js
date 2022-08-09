import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { curentUser, deleteFrinde } from "../redux-store/Actions/frindesAction";
import { useDispatch } from "react-redux";
import { isLoading } from "../redux-store/Actions/isLoading";
import { LODING, NOT_LODING } from "../redux-store/Actions/types";
import { useNavigate } from "react-router-dom";
const ButtonToEditeOrDelete = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRequest = async () => {
    if (props.value === "حذف") {
      isLoading(dispatch, LODING);
      await deleteFrinde(dispatch, props.infoUser);
      isLoading(dispatch, NOT_LODING);
    } else {
      let frinde = {
        name: props.infoUser.name,
        id: props.infoUser.id,
        type_date: props.infoUser.type_date,
        age: props.infoUser.age.curentDate,
      };
      curentUser(dispatch, frinde);
      navigate("/friend/edit");
    }
  };

  return (
    <Fragment>
      <Button className={props.class} onClick={() => handleRequest()}>
        {props.value}
      </Button>
    </Fragment>
  );
};

export default ButtonToEditeOrDelete;
