import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ navItems }) => {
  return (
    <div className={classes.navWrapper}>
      <ul
        className={[classes.nav, classes.navSize, classes.navBackground, classes.navPosition].join(
          " "
        )}
      >
        {navItems.map((item) => (
          <li key={item.title} className={[classes.nav__itemPosition, classes.nav__item].join(" ")}>
            <img className={classes.nav__img} src={item.imgSrc} alt={item.imgAlt} />
            <Link id={Date.now()} className={classes.nav__link} to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
