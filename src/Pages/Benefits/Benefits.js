import React from "react";
import { Container } from "react-bootstrap";
import call from "../../image/icon/call.svg";
import codSmall from "../../image/icon/cod-small.svg";
import deliveryIcon from "../../image/icon/delivery_icon.svg";
import happyReturn from "../../image/icon/happy-return-big.svg";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center mt-5 mb-5">Benefits</h1>
      <Container>
        <div className="row">
          <div className="col-md-6 col-xl-3 mb-5">
            <div className="benefits">
              <img src={call} alt="" />
              <div>
                <h6>Help: 16299</h6>
                <h6>24 Hours a Day, 7 Days a Week</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-5">
            <div className="benefits">
              <img src={codSmall} alt="" />
              <div>
                <h6>Pay cash on delivery</h6>
                <h6>Pay cash at your doorstep</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-5">
            <div className="benefits">
              <img src={deliveryIcon} alt="" />
              <div>
                <h6>Service</h6>
                <h6>All over Bangladesh</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-5">
            <div className="benefits">
              <img src={happyReturn} alt="" />
              <div>
                <h6>Happy Return</h6>
                <h6>All over Bangladesh</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
