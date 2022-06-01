import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container mt-5 mb-5">
      <h4 className="text-center mt-5 mb-5">
        Subscribe and be a part of the Books zone
      </h4>
      <div className=" col-md-10 col-xl-6 mb-5">
        <input
          className="subscribe-email"
          type="text"
          placeholder="Enter your email"
        />
        <input className="subscribe-submit" type="submit" />
      </div>
    </div>
  );
};

export default Subscribe;
