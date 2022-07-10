import React from "react";
import classes from "./SpotifyInput.module.css";

const SpotifyInput = (props) => {
  return (
    <div className={classes.search}>
      <input
        className={[classes.search__input, classes.search__inputPosition].join(
          " "
        )}
        type="text"
        {...props}
      />
    </div>
  );
};

export default SpotifyInput;
