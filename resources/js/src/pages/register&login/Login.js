import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../components/Input";
import { login } from "../../redux-store/Actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLoading } from "../../redux-store/Actions/isLoading";
import { LODING, NOT_LODING } from "../../redux-store/Actions/types";
import AlertsErrors from "../../components/AlertsErrors";
import { restErForm } from "../../redux-store/Actions/restErorrs";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoUser = useSelector((st) => st.user);
  const _isLoading = useSelector((state) => state.isLoading.isLoading);
  const errorsValidtion = useSelector((state) => state.errors.input.form);

  const handleLogin = async () => {
    restErForm(dispatch);
    isLoading(dispatch, LODING);
    await login(dispatch, infoUser.user);
    isLoading(dispatch, NOT_LODING);

    navigate("/profile");
  };

  const isLoadingOrNot = () => {
    if (_isLoading) {
      return <Spinner animation="border" />;
    } else {
      return (
        <>
          <span className=" text-light fs-3 ">تسجيل دخول</span>{" "}
          <Input placeholder={"ايميل"} name={"email"} />
          <Input placeholder={"رمز سري"} name={"password"} />
          {errorsValidtion.length > 0 ? (
            <AlertsErrors errors={errorsValidtion} />
          ) : null}
          <Button
            variant="primary"
            onClick={() => handleLogin()}
            className="sumbite-btn"
          >
            سجل
          </Button>
        </>
      );
    }
  };
  return <Container className=" w-50 mt-5">{isLoadingOrNot()}</Container>;
}

export default Login;
