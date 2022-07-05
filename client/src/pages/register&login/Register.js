import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../../components/Input";
import { register } from "../../redux/Actions/userAction";
import { useSelector, useDispatch } from "react-redux";

function Register() {
  const infoUser = useSelector((st) => st.user.user);
  const dispatch = useDispatch();
  return (
    <Container className=" w-50 mt-5">
      <Input placeholder={"الاسم"} name={"name"} />

      <Input placeholder={"ايميل"} name={"email"} />

      <Input placeholder={"رمز سري"} name={"password"} />

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={() => register(dispatch, infoUser)}>
        سجل
      </Button>
    </Container>
  );
}

export default Register;
