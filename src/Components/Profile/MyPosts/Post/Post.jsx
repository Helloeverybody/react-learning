import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.item}>
            <h3>Post {props.number}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Post