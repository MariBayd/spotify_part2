import React from "react";
import classes from "./Header.module.css"

const Header = () => {
    
    return (
        <header className={classes.header}>
            <img className={[classes.logo, classes.logoPosition].join(' ')} src="Spotify_logo_with_text.svg"/>
        </header>
    )
}

export default Header;