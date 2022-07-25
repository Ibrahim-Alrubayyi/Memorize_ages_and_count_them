import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { deleteFrinde, editeFrinde } from "../redux/Actions/frindesAction";
import { useDispatch } from "react-redux";
import { isLoading } from "../redux/Actions/isLoading";
import { LODING, NOT_LODING } from "../redux/Actions/types";
import { useNavigate } from "react-router-dom";
const ButtonToEditeOrDelete = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRequest = async () => {
    if (props.value === "حذف") {
      isLoading(dispatch, LODING);
      console.log(props.infoUser);
      await deleteFrinde(dispatch, props.infoUser);
      isLoading(dispatch, NOT_LODING);
    } else {
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
