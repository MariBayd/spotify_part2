import React from "react";
import classes from "./SpotifyLabel.module.css";

const SpotifyLabel = ({ children }) => {
  return (
    <label
      className={[classes.search__label, classes.search__labelPosition].join(
        " "
      )}
      htmlFor="search__input"
    >
      {children}
    </label>
  );
};

export default SpotifyLabel;
