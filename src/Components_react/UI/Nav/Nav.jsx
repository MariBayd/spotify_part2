import React from "react";
import classes from "./Nav.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav = ({props}) => {
    
    return (
      <div className={classes.navWrapper}>
      <ul className={[classes.nav, classes.navSize, classes.navBackground, classes.navPosition].join(' ')}>

        {props.map((item) => 
            <li className={[classes.nav__itemPosition, classes.nav__item].join(' ')}>
              <img className={classes.nav__img} src={item.imgSrc} alt={item.imgAlt} />
              <Link className={classes.nav__link} to={item.link}>{item.title}</Link>
            </li>
          )
        }
      </ul>        
    </div>
    )
}

export default Nav;