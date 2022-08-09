import React from "react";
//redux-store
import { useSelector, useDispatch } from "react-redux";
//imgs
import userImg from "../imgs/user-img.jpg";
// components
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//css
import "../styles/header.css";
import { logout } from "../redux-store/Actions/userAction";
const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((st) => st.user.isLogin);

  const hansleLogut = async () => {
    await logout(dispatch);
    navigate("/");
  };

  const handleNavigateToHome = () => navigate("/");
  const dispatch = useDispatch();

  const handleLinks = () => {
    if (isLogin) {
      return (
        <>
          <Nav.Link
            onClick={() => navigate("/profile/edit")}
            className="color-black "
          >
            <Image src={userImg} rounded={true} width={50} />
          </Nav.Link>
          <Nav.Link onClick={handleNavigateToHome} className="color-black m-3">
            الرئيسية
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/profile")}
            className="color-black m-3"
          >
            اصدقاء
          </Nav.Link>
          <Nav.Link
            className=" fw-bold text-light m-3 bg-danger rounded"
            onClick={() => hansleLogut()}
          >
            تسجيل خروج
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link onClick={handleNavigateToHome} className="color-black m-3">
            الرئيسية
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/register")}
            className="color-black  m-3 "
          >
            تسجيل
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/login")}
            className="color-black m-3"
          >
            تسجيل دخول
          </Nav.Link>
        </>
      );
    }
  };
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand onClick={handleNavigateToHome} className="color-black">
            لا تنسى العمر
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center navbar-nav ">
              {handleLinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
