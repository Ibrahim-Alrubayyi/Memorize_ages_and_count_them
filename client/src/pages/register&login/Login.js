import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../components/Input";
import { login } from "../../redux/Actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLoading } from "../../redux/Actions/isLoading";
import { LODING, NOT_LODING } from "../../redux/Actions/types";
import AlertsErrors from "../../components/AlertsErrors";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoUser = useSelector((st) => st.user);
  const _isLoading = useSelector((state) => state.isLoading.isLoading);
  const errorsValidtion = useSelector((state) => state.errors.input.form);

  const handleLogin = async () => {
    isLoading(dispatch, LODING);
    await login(dispatch, infoUser.user);
    isLoading(dispatch, NOT_LODING);
    if (errorsValidtion.length === 0) {
      navigate("/profile");
    }
  };

  const isLoadingOrNot = () => {
    if (_isLoading) {
      return <Spinner animation="border" />;
    } else {
      return (
        <>
          <Input placeholder={"ايميل"} name={"email"} />
          <Input placeholder={"رمز سري"} name={"password"} />
          {errorsValidtion.length > 0 ? (
            <AlertsErrors errors={errorsValidtion} />
          ) : null}
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={() => handleLogin()}>
            سجل
          </Button>
        </>
      );
    }
  };
  return <Container className=" w-50 mt-5">{isLoadingOrNot()}</Container>;
}

export default Login;
