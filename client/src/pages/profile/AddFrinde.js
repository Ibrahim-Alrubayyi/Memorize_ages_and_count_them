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
    <Container className=" bg-gray-300 form-age-edite-add w-md-50">
      <span className="text-light fs-4 pb-3">اضافة صديق جديد</span>
      <Input placeholder={"الاسم"} name="frindeName" />
      <div className="d-flex justify-content-around m-3">
        <Button className=" bg-pink" onClick={() => setShow("hj")}>
          حساب بالهجري
        </Button>
        <Button className=" bg-pink" onClick={() => setShow("gr")}>
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
