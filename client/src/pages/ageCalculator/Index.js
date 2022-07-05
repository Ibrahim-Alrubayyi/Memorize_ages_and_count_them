import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlertsErrors from "../../components/AlertsErrors";
import FormAge from "../../components/FormAge";
import Spinner from "react-bootstrap/Spinner";

//imgs
// import ManThinking from "../../imgs/110372-character-animation (2).gif";
//css
import "../../styles/App.css";
import "../../styles/index.css";
const Index = () => {
  //validtion inputs , and this errors coming from back-end
  const errorsGr = useSelector((state) => state.errors.input.gr);
  const errorsHj = useSelector((state) => state.errors.input.hj);
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    <Container className="w-50  pb-3">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <FormAge nameForm={"بالهجري"} typeDate="hj" />
          {errorsHj.length > 0 ? <AlertsErrors errors={errorsHj[0]} /> : null}
          <hr />
          <FormAge nameForm={"بالميلادي"} typeDate="gr" />
          {errorsGr.length > 0 ? <AlertsErrors errors={errorsGr[0]} /> : null}
        </>
      )}
      {/* <iframe src="https://embed.lottiefiles.com/animation/110372"></iframe> */}
    </Container>
  );
};

export default Index;
