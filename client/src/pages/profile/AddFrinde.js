import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import FormAge from "../../components/FormAge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
const AddFrinde = () => {
  const user = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  const [show, setShow] = useState("hj");
  return (
    <Container className=" bg-gray-300">
      <Input placeholder={"الاسم"} name="frindeName" />
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
        <FormAge typeDate={"hj"} nameForm="هجري" addFrinde={"add"} />
      ) : (
        <FormAge typeDate={"gr"} nameForm="ميلادي" addFrinde={"add"} />
      )}
    </Container>
  );
};

export default AddFrinde;
