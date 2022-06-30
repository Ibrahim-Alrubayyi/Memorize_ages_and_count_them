import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormAge from "../../components/FormAge";
//imgs
import ManThinking from "../../imgs/110372-character-animation (2).gif";
import { ageCalc, calcAge } from "../../redux/Actions/ageAction";
//css
import "../../styles/App.css";
import "../../styles/index.css";
const Index = () => {
  const dispatch = useDispatch();

  return (
    <Container className="w-50  pb-3">
      {/* <iframe src="https://embed.lottiefiles.com/animation/110372"></iframe> */}
      <FormAge nameForm={"بالهجري"} typeDate="hj" />
      <hr />
      <FormAge nameForm={"بالميلادي"} typeDate="gr" />
    </Container>
  );
};

export default Index;
