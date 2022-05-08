import React from "react";
import { Container } from "react-bootstrap";
import Benefits from "../../Benefits/Benefits";
import Subscribe from "../../Subscribe/Subscribe";

const Footer = () => {
  return (
    <div>
      <Container>
        <Subscribe></Subscribe>
        <Benefits></Benefits>
        <p>
          <small>Copyright © by Fruits Strip Warehouse - 2022</small>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
