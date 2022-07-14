import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const UserAge = () => {
  const infoUserAge = useSelector((state) => state.age.calculatedAge);
  const navigate = useNavigate();
  const typeDate = infoUserAge.typeDate === "hj" ? "بالهجري" : "بالميلادي";
  useEffect(() => {
    if (!infoUserAge.alert) {
      navigate("/");
    }
  }, []);
  return (
    <Container>
      <h1>عمري {typeDate}</h1>
      <hr />
      <h2> سنه</h2>
      <h3>{infoUserAge.ageHj[2].year}</h3>

      <h2> شهر</h2>
      <h3>{infoUserAge.ageHj[1].month}</h3>

      <h2> الايام</h2>
      <h3>{infoUserAge.ageHj[0].day}</h3>
      <hr />
      <h1>عمري {typeDate === "بالهجري" ? "بالميلادي" : "بالهجري"}</h1>

      <h2> سنه</h2>
      <h3>{infoUserAge.ageGr[2].year}</h3>

      <h2> شهر</h2>
      <h3>{infoUserAge.ageGr[1].month}</h3>

      <h2> الايام</h2>
      <h3>{infoUserAge.ageGr[0].day}</h3>
      <div></div>
    </Container>
  );
};

export default UserAge;
