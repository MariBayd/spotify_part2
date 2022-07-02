import React from "react";
import classes from "./PostItem.module.css";
import { defaultViewImg } from "../../../Constans.js";

const PostItem = ({ imgUrl, title, artist }) => {
  return (
    <div
      className={[classes.cardMusic, classes.cardMusic_background, classes.cardMisicPosition].join(
        " "
      )}
    >
      <img
        className={classes.cardMusic__img}
        src={imgUrl.length ? imgUrl[0].url : defaultViewImg}
      />
      <span title={title} className={classes.cardMusic__playlistName}>
        {title}
      </span>
      <a className={classes.cardMusic__link} href="#">
        <span className={classes.cardMusic__playlistSinger}>{artist}</span>
      </a>
    </div>
  );
};

export default PostItem;
