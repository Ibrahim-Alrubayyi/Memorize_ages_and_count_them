import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShowAllFrindes from "../../components/ShowAllFrindes";
import { getAllFrindesAction } from "../../redux/Actions/frindesAction";

const Profile = () => {
  const errorsValidtion = useSelector(
    (state) => state.errors.input.stateErorrForm
  );
  const frindes = useSelector((state) => state.frindes.frindes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getAllFrindesAction(dispatch);
    //if login is erorr
    console.log(frindes);

    if (errorsValidtion) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Container>
        <div className="mb-3">
          <Button>اضافة شخص جديد</Button>
        </div>
        <ShowAllFrindes frindes={frindes} />
      </Container>
    </>
  );
};

export default Profile;
