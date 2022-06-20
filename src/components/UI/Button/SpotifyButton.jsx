import React from 'react';
import classes from './SpotifyButton.module.css';

const SpotifyButton = ({children, ...props}) => {
    
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default SpotifyButton;