import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import AlertsErrors from "../../components/AlertsErrors";
import FormAge from "../../components/FormAge";
import Spinner from "react-bootstrap/Spinner";

//imgs
// import ManThinking from "../../imgs/110372-character-animation (2).gif";AW
import { showHjOrGr } from "../../redux-store/Actions/ageAction";
const Index = () => {
  const show = useSelector((st) => st.age.show);
  const dispatch = useDispatch();
  //validtion inputs , and this errors coming from back-end
  const errorsGr = useSelector((state) => state.errors.input.gr);
  const errorsHj = useSelector((state) => state.errors.input.hj);
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    //className="w-md-50 pb-3"
    // <Container>
    <>
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          {/* start landing */}
          <Container className="w-md-50 pb-3">
            <div className="landing fs-2 d-flex justify-content-center  flex-column text-center">
              <div className=""> احسب العمر بالهجري و الميلادي</div>
              <div className="second-text mt-2 rounded pb-1">
                وامكانك تسجل في موقع وتحفظ اعمار اصدقائك
              </div>
              <div className="">
                وعند اقتراب ميلادهم سوف تأتي رسالة تنبيه على ايميل
              </div>
            </div>
          </Container>
          {/* end landing */}
          <div className="form-age p-1 d-flex align-items-center">
            <Container className="w-md-50  ">
              <div className="d-flex justify-content-around m-3  ">
                <Button
                  className=" bg-pink    "
                  onClick={() => showHjOrGr(dispatch, "hj")}
                >
                  حساب بالهجري
                </Button>
                <Button
                  className=" bg-pink"
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

              {errorsHj.length > 0 ? (
                <AlertsErrors errors={errorsHj[0]} />
              ) : null}

              {errorsGr.length > 0 ? (
                <AlertsErrors errors={errorsGr[0]} />
              ) : null}
            </Container>
          </div>
        </>
      )}
      {/* <iframe src="https://embed.lottiefiles.com/animation/110372"></iframe> */}
      {/* // </Container> */}
    </>
  );
};

export default Index;
