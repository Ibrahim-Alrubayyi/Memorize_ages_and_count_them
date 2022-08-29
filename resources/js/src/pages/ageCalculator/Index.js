import React from "react";
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
    <>
      {isLoading ? (
        <div
          className=" text-center d-flex   align-items-center justify-content-center"
          style={{ height: " calc(100vh - 61px)" }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {/* start landing */}
          <Container className="w-md-50 pb-3">
            <div className="landing fs-2 d-flex justify-content-center  flex-column text-center">
              <div className=""> حساب العمر بالهجري والميلادي</div>
              <div className="second-text mt-2 rounded pb-1">
                بالإضافة الى أنه يمكنك التسجيل في الموقع والإحتفاظ بتاريخ ميلاد
                أصدقائك،
              </div>
              <div className="">
                وفي حين إقترب تاريخ ميلادهم سوف تصلك رسالة تنبية عبر البريد
                الإلكتروني المسجل في الموقع{" "}
              </div>
            </div>
          </Container>
          {/* end landing */}
          {/* start waves  */}
          <div>
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use href="#gentle-wave" x="48" y="0" fill="#ffe742a3" />
                <use href="#gentle-wave" x="48" y="3" fill="#ffe742a3" />
                <use href="#gentle-wave" x="48" y="5" fill="#ffe742a3" />
                <use href="#gentle-wave" x="48" y="7" fill="#ffe742a3" />
              </g>
            </svg>
          </div>

          {/* end weves */}
          <div className="form-age p-1 d-flex align-items-center">
            <Container className="w-md-50  ">
              <div className="d-flex justify-content-around m-3  ">
                <Button
                  className="bg-yelow"
                  onClick={() => showHjOrGr(dispatch, "hj")}
                >
                  حساب بالهجري
                </Button>
                <Button
                  className="bg-yelow"
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
