import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShowAllFrindes from "../../components/ShowAllFrindes";
import { getAllFrindesAction } from "../../redux-store/Actions/frindesAction";

const Profile = () => {
  const errorsValidtion = useSelector(
    (state) => state.errors.input.stateErorrForm
  );
  const frindes = useSelector((state) => state.frindes.frindes);
  const user = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getAllFrindesAction(dispatch);
    //if login is erorr

    if (errorsValidtion) {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <Container>
        <div className="mb-3">
          <Button
            onClick={() => navigate("/friend/add")}
            className="sumbite-btn"
          >
            اضافة صديق جديد
          </Button>
        </div>
        <ShowAllFrindes frindes={frindes} />
      </Container>
    </>
  );
};

export default Profile;
