import React from "react";
import { Container } from "react-bootstrap";
import Subscribe from "../../Subscribe/Subscribe";

const Footer = () => {
  return (
    <div>
      <Container>
        <Subscribe></Subscribe>
        <p>
          <small>Copyright © by Fruits Strip Warehouse - 2022</small>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
