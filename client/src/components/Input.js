import Form from "react-bootstrap/Form";
import { inputsRegister } from "../redux/Actions/InputsRegister";
import { useDispatch } from "react-redux";
import { EMAIL, NAME, PASSWORD } from "../redux/Actions/types";
const Input = ({ placeholder, name }) => {
  const dispatch = useDispatch();

  const saveInfoInput = (e) => {
    if (name === "name") {
      inputsRegister(dispatch, NAME, e.target.value);
    } else if (name === "email") {
      inputsRegister(dispatch, EMAIL, e.target.value);
    } else {
      inputsRegister(dispatch, PASSWORD, e.target.value);
    }
  };
  return (
    <Form.Group className="mb-3">
      <Form.Control
        placeholder={placeholder}
        name={name}
        onChange={(e) => saveInfoInput(e)}
      />
    </Form.Group>
  );
};

export default Input;
