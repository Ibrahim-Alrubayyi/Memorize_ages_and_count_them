import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import {
  getInfoProfile,
  postInfoToEdite,
} from "../../redux-store/Actions/userAction";

const ProfileEdite = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.user);

  useEffect(() => {
    getInfoProfile(dispatch);
  }, []);

  const handleRequestEditeProfile = () => {
    postInfoToEdite(dispatch, {
      name: info.inputs.name,
      email: info.inputs.email,
    });
    setShow(false);
  };

  return (
    <Container>
      {show ? (
        <>
          <Input
            placeholder={"الاسم"}
            name={"nameEdite"}
            value={info.inputs.name}
          />
          <Input
            placeholder={"الايميل"}
            name={"emailEdite"}
            value={info.inputs.email}
          />
          <Button onClick={() => handleRequestEditeProfile()}>تعديل</Button>
        </>
      ) : (
        <div className=" bg-dark rounded">
          <div
            className=" d-flex fw-bold justify-content-end p-3 fs-3 bg-info"
            onClick={() => setShow(true)}
          >
            تعديل
          </div>
          <h4 className=" text-white p-3">
            <span>الاسم :</span> {info.user.name}
          </h4>
          <h4 className=" text-white p-3">
            <span className=" text-bold">الايميل:</span> {info.user.email}
          </h4>
        </div>
      )}
    </Container>
  );
};

export default ProfileEdite;
