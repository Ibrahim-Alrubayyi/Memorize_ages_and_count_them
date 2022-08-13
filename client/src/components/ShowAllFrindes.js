import React from "react";
import { Col, Row } from "react-bootstrap";

import ButtonToEditeOrDelete from "./ButtonToEditeOrDelete";
const ShowAllFrindes = ({ frindes = [] }) => {
  const checkToFindFrindes = () => {
    if (frindes.length) {
      return (
        <Row>
          {frindes.map((el, ind) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={4}
                className={"  mb-3 rounded me-md-1 me-lg-1 me-md blue-bg pt-2"}
                key={ind}
              >
                <ButtonToEditeOrDelete
                  class="bg-danger mb-3"
                  value="حذف"
                  infoUser={el.id}
                />
                <ButtonToEditeOrDelete
                  class="ms-3 mb-3"
                  value="تعديل"
                  infoUser={el}
                />

                <div className="bg-dark rounded text-center text-light">
                  <h1> الاسم : {el.name}</h1>
                  <p>
                    العمر بالهجري : {el.age.hj[2].year} سنه /
                    {el.age.hj[1].month}
                    شهر / {el.age.hj[0].day}
                    يوم
                  </p>
                  <p>
                    العمر بالميلادي : {el.age.gr[2].year} سنه /
                    {el.age.gr[1].month}
                    شهر / {el.age.gr[0].day}
                    يوم
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      );
    } else {
      return <> لا يوجد اضف اصدقاء من هنا</>;
    }
  };

  return checkToFindFrindes();
};

export default ShowAllFrindes;
