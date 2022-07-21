import React from "react";
//redux
import { useSelector } from "react-redux";
//imgs
import userImg from "../imgs/user-img.jpg";
// components
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//css
import "../styles/header.css";
const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((st) => st.user.isLogin);

  const handleNavigateToHome = () => navigate("/");
  const handleLinks = () => {
    if (isLogin) {
      return (
        <>
          <Nav.Link onClick={() => navigate("/login")} className="color-black ">
            <Image src={userImg} rounded={true} width={50} />
          </Nav.Link>
          <Nav.Link onClick={handleNavigateToHome} className="color-black  m-3">
            الرئيسية
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/frinds")}
            className="color-black   m-3   "
          >
            اصدقاء
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link onClick={handleNavigateToHome} className="color-black  m-3">
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
      <Navbar>
        <Container>
          <Navbar.Brand onClick={handleNavigateToHome} className="color-black ">
            لا تنسى العمر
          </Navbar.Brand>
          <Nav className="me-auto text-center">{handleLinks()}</Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
