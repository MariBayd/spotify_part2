import React from 'react';
import classes from './PostItem.module.css';
import {defaultViewImg} from '../../../js/Constans.js'


const PostItem = (props) => {
    
    return (
        <div className={[classes.cardMusic, classes.cardMusic_background, classes.cardMisicPosition].join(' ')}>
            <img className={classes.cardMusic__img}
                src={props.imgUrl.length ? props.imgUrl[0].url : defaultViewImg}/>
            <span title={props.title} className={classes.cardMusic__playlistName}>
                {props.title}
            </span>
            <a className={classes.cardMusic__link} href='#'>
            <span className={classes.cardMusic__playlistSinger}>
                {props.artist}
            </span></a>
        </div>
    )
}

export default PostItem;