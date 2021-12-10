import React from "react";
import s from './MyPosts.module.css'
import './Post/Post'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={s.posts}>
            <div className={s.newPost}>
                <h2>New post</h2>
                <textarea></textarea>
                <br></br><button>Отправить</button>
            </div>
            <div className={s.postsList}>
                <h2>Posts</h2>
                <Post number='1' message='привет чмо'/>
                <Post number='2' message='ваш проект говно'/>
                <Post number='3' message='ну че, закибербуллили тебя, да?'/>
            </div>
        </div>
    );
}

export default MyPosts