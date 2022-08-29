import React, { Fragment } from "react";
import Alert from "react-bootstrap/Alert";

const AlertsErrors = ({ errors }) => {
  return (
    <Fragment>
      <Alert variant="danger" dismissible>
        <Alert.Heading> لقد حصل خطأ رجاء محاولة مره اخرى!</Alert.Heading>
        <ul>
          {errors.map((el, ind) => {
            return <li key={ind}>{el}</li>;
          })}
        </ul>
      </Alert>
    </Fragment>
  );
};

export default AlertsErrors;
