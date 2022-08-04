import { Outlet, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginDone } from "../redux/Actions/userAction";

const PrivateRoutes = ({ auth }) => {
  const dispatch = useDispatch();
  if (auth !== null) {
    const testUserState = !auth ? null : loginDone(dispatch);
  }

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
