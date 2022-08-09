import Form from "react-bootstrap/Form";
import { inputsRegister } from "../redux-store/Actions/InputsRegister";
import { useDispatch, useSelector } from "react-redux";
import { EMAIL, NAME, PASSWORD } from "../redux-store/Actions/types";
import { inputNameEdite } from "../redux-store/Actions/frindesAction";
import {
  inputEmailEditeUser,
  inputNameEditeUser,
} from "../redux-store/Actions/userAction";
const Input = ({ placeholder, name, frinde, value }) => {
  const dispatch = useDispatch();
  const cruentFrinde = useSelector((state) => state.frindes.inputs);

  const saveInfoInput = (e) => {
    if (name === "name") {
      inputsRegister(dispatch, NAME, e.target.value);
    } else if (name === "email") {
      inputsRegister(dispatch, EMAIL, e.target.value);
    } else if (name === "frindeName") {
      inputNameEdite(dispatch, e.target.value);
    } else if (name === "emailEdite") {
      inputEmailEditeUser(dispatch, e.target.value);
    } else if (name === "nameEdite") {
      inputNameEditeUser(dispatch, e.target.value);
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
        value={frinde ? cruentFrinde.name : value ? value : undefined}
      />
    </Form.Group>
  );
};

export default Input;
