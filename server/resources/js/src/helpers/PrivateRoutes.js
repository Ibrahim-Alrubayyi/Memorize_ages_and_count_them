import { Outlet, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginDone } from "../redux-store/Actions/userAction";
import React from "react";
import { getAllFrindes } from "../adapters/getAllFrindes";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  console.log(8);
  const [auth] = React.useState(async () => {
    const testUserToken = await getAllFrindes(dispatch);

    if (testUserToken.status === 200) {
      loginDone(dispatch);
      return true;
    } else {
      return false;
    }
  });

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
