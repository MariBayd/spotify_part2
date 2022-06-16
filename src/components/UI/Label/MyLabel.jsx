import React from "react";
import classes from "./MyLabel.module.css"

const MyLabel = ({children}) => {
    
    return (
        <label className={[classes.search__label, classes.search__labelPosition].join(' ')}
            htmlFor="search__input">{children}</label>
    )
}

export default MyLabel;