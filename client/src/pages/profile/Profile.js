import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFrindesAction } from "../../redux/Actions/frindesAction";

const Profile = () => {
  const errorsValidtion = useSelector(
    (state) => state.errors.input.stateErorrForm
  );
  const frindes = useSelector((state) => state.frindes.frindes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // getAllFrindesAction(dispatch);
    //if login is erorr
    if (errorsValidtion) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Button onClick={() => getAllFrindesAction(dispatch)}>جلب اصدقاء</Button>
    </>
  );
};

export default Profile;
