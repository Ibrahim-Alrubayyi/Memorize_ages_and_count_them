import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../components/Input";
import { register } from "../../redux-store/Actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLoading } from "../../redux-store/Actions/isLoading";
import { LODING, NOT_LODING } from "../../redux-store/Actions/types";
import AlertsErrors from "../../components/AlertsErrors";
import { restErForm } from "../../redux-store/Actions/restErorrs";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const infoUser = useSelector((st) => st.user.user);
    const _isLoading = useSelector((state) => state.isLoading.isLoading);
    const errorsValidtion = useSelector((state) => state.errors.input.form);

    const handleRgister = async () => {
        restErForm(dispatch);
        isLoading(dispatch, LODING);
        await register(dispatch, infoUser);
        isLoading(dispatch, NOT_LODING);
        if (errorsValidtion.length) {
            navigate("/profile");
        }
    };

    const isLoadingOrNot = () => {
        if (_isLoading) {
            return (
                <div
                    className=" text-center d-flex   align-items-center justify-content-center"
                    style={{ height: " calc(100vh - 61px)" }}
                >
                    <Spinner animation="border" />
                </div>
            );
        } else {
            return (
                <>
                    <span className=" text-light fs-3 ">تسجيل </span>
                    <Input placeholder={"الاسم"} name={"name"} />
                    <Input placeholder={"ايميل"} name={"email"} />
                    <Input placeholder={"رمز سري"} name={"password"} />
                    {errorsValidtion.length > 0 ? (
                        <AlertsErrors errors={errorsValidtion} />
                    ) : null}
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={() => handleRgister()}>
                        سجل
                    </Button>
                </>
            );
        }
    };
    return <Container className=" w-50 mt-5">{isLoadingOrNot()}</Container>;
}

export default Register;
