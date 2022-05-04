import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-100 mx-auto position-absolute top-50 start-50 ">
      <div className="position-fixed ">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
};

export default Loading;
