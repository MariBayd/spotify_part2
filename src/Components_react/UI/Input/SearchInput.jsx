import React from "react";
import classes from "./SearchInput.module.css"

const SearchInput = (props) => {
    
    return (
        <div className={classes.search}>
            <label className={[classes.search__label, classes.search__labelPosition].join(' ')}
                htmlFor="search__input">Что найти для вас?</label>
            <input className={[classes.search__input, classes.search__inputPosition].join(' ')}
                type="text" id="search__input" placeholder="Исполнитель" {...props} />
        </div>

    )
}

export default SearchInput;