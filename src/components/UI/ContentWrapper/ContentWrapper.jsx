import React from "react";
import classes from "./ContentWrapper.module.css"

const ContentWrapper = ({title, children}) => {
    
    return (
        <div className={classes.contentItem}>
            <div className={classes.contentItem__header}>
                <div className={classes.contentItem__title}>
                    <span>{title}</span>
                </div>
            </div>
            <div className={classes.contentItem__cards}>
                {children}
            </div>
        </div>    
    )
}

export default ContentWrapper;


