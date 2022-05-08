import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../image/logo.png";
import call from "../../../image/icon/call.png";
import { Link } from "react-router-dom";
import facebook from "../../../image/icon/facebook.png";
import linkedin from "../../../image/icon/linkedin.png";
import twitter from "../../../image/icon/twitter.png";
import playstore from "../../../image/icon/playstore.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-md-6 col-xl-4 mb-5">
            <div className="information">
              <ul>
                <li className="footer-logo">
                  <img src={logo} alt="" />
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <h6>190 Dhaka New Market</h6>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <h6>Official: web@bookzoon.com</h6>
                </li>
                <li>
                  <img className="call" src={call} alt="" />
                  <h6>Helpline :16299</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-5">
            <div className="information">
              <ul>
                <li>
                  <h6>Useful Link</h6>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/inventories">Inventories</Link>
                </li>
                <li>
                  <Link to="/manage-items">Manage Items</Link>
                </li>
                <li>
                  <Link to="/add-item">Add Item</Link>
                </li>
                <li>
                  <Link to="/my-items">My Items</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-5">
            <div className="social-media">
              <ul>
                <li>
                  <h6>Social Media</h6>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={facebook} alt="" />
                </li>
                <li>
                  <img src={linkedin} alt="" />
                </li>
                <li>
                  <img src={twitter} alt="" />
                </li>
              </ul>
              <img className="playstore" src={playstore} alt="" />
            </div>
          </div>
        </div>
        <h6 className="text-center mt-5 text-white">
          <small className="d-block">Copyright © 2022 books zone.com</small>
        </h6>
      </Container>
    </div>
  );
};

export default Footer;
