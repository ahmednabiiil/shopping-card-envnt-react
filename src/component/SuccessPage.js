"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="success__page">
      <div className="container">
        <div className="success__box">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/success-26.png"
            alt="success"
            className="img-fluid"
          />
          <div className="mt-20">
            <h1> Successful!</h1>
            <p>Your purchase was completed successfully.</p>
            <button className="cus__btn" onClick={() => navigate("/")}>
              Back Home
            </button>{" "}
            {/* Navigate to the home page */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
