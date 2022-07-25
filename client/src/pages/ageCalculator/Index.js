import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import AlertsErrors from "../../components/AlertsErrors";
import FormAge from "../../components/FormAge";
import Spinner from "react-bootstrap/Spinner";

//imgs
// import ManThinking from "../../imgs/110372-character-animation (2).gif";
//css
import "../../styles/App.css";
import "../../styles/index.css";
import { showHjOrGr } from "../../redux/Actions/ageAction";
const Index = () => {
  const show = useSelector((st) => st.age.show);
  const dispatch = useDispatch();
  //validtion inputs , and this errors coming from back-end
  const errorsGr = useSelector((state) => state.errors.input.gr);
  const errorsHj = useSelector((state) => state.errors.input.hj);
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    <Container className="w-md-50 pb-3">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div className="d-flex justify-content-around m-3">
            <Button
              className=" bg-dark border-3 border-white"
              onClick={() => showHjOrGr(dispatch, "hj")}
            >
              حساب بالهجري
            </Button>
            <Button
              className=" bg-light border-3 border-dark color-black"
              onClick={() => showHjOrGr(dispatch, "gr")}
            >
              حساب بالميلادي
            </Button>
          </div>
          {show === "hj" ? (
            <FormAge nameForm={"بالهجري"} typeDate="hj" />
          ) : (
            <FormAge nameForm={"بالميلادي"} typeDate="gr" />
          )}

          {errorsHj.length > 0 ? <AlertsErrors errors={errorsHj[0]} /> : null}

          {errorsGr.length > 0 ? <AlertsErrors errors={errorsGr[0]} /> : null}
        </>
      )}
      {/* <iframe src="https://embed.lottiefiles.com/animation/110372"></iframe> */}
    </Container>
  );
};

export default Index;
