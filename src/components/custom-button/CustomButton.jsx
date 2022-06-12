import React from "react";
import "./custome-button.scss";
const CustomButton = ({ children, isGoggleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoggleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
