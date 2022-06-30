import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import SelectForm from "../components/SelectForm";
const FormAge = ({ typeDate, nameForm }) => {
  return (
    <Fragment>
      <h1 className="color-white"> عمرك {nameForm}</h1>
      <Form action="" method="get">
        <SelectForm nameDate="سنه" nameSelect="year" typeDate={typeDate} />
        <SelectForm
          numDate={12}
          nameDate="شهر"
          nameSelect="month"
          typeDate={typeDate}
        />
        <SelectForm
          numDate={31}
          nameDate="يوم"
          nameSelect="day"
          typeDate={typeDate}
        />
        <Button type="sumbit">احسب</Button>
      </Form>
    </Fragment>
  );
};

export default FormAge;
