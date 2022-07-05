import React from "react";

// components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

//css
import "../styles/header.css";
const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => navigate("/");
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand onClick={handleNavigateToHome} className="color-black">
            لا تنسى العمر
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handleNavigateToHome} className="color-black">
              الرئيسية
            </Nav.Link>

            <Nav.Link
              onClick={() => navigate("/register")}
              className="color-black"
            >
              تسجيل
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/login")}
              className="color-black"
            >
              تسجيل دخول
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
