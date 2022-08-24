import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAge from "../../components/FormAge";
import { Button, Container } from "react-bootstrap";
const EditeFrinde = () => {
  const [show, setShow] = useState(
    useSelector((state) => state.frindes.inputs.type_date)
  );
  const user = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  return (
    <Container className="form-age-edite-add w-md-50">
      <span className="text-light fs-4 pb-3">تعديل صديق </span>

      <Input placeholder={"الاسم"} name="frindeName" frinde={true} />
      <div className="d-flex justify-content-around m-3">
        <Button className="  bg-pink" onClick={() => setShow("hj")}>
          حساب بالهجري
        </Button>
        <Button className=" bg-pink" onClick={() => setShow("gr")}>
          حساب بالميلادي
        </Button>
      </div>
      {show === "hj" ? (
        <FormAge typeDate={"hj"} nameForm="هجري" addFrinde={true} />
      ) : (
        <FormAge typeDate={"gr"} nameForm="ميلادي" addFrinde={true} />
      )}
    </Container>
  );
};

export default EditeFrinde;
