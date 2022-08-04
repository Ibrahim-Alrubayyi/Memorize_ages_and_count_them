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
    <Container>
      <Input placeholder={"الاسم"} name="frindeName" frinde={true} />
      <div className="d-flex justify-content-around m-3">
        <Button
          className=" bg-dark border-3 border-white"
          onClick={() => setShow("hj")}
        >
          حساب بالهجري
        </Button>
        <Button
          className=" bg-light border-3 border-dark color-black"
          onClick={() => setShow("gr")}
        >
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
