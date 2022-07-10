import React from "react";
import defaultClasses from "./SpotifyButton.module.css";

const SpotifyButton = ({ children, classes="", ...props }) => {
  return (
    <button {...props} className={[classes, defaultClasses.myBtn].join(" ")}>
      {children}
    </button>
  );
};

export default SpotifyButton;
