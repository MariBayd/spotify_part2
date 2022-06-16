import React from "react";
import classes from "./MyInput.module.css"

const MyInput = (props) => {
    
    return (
        <div className={classes.search}>
            <input className={[classes.search__input, classes.search__inputPosition].join(' ')}
                type="text"  {...props} />
        </div>
    )
}

export default MyInput;