import React from "react";
import s from './Profile.module.css'
import './MyPosts/MyPosts'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <div>
                <img className={s.head_image} src="https://get.wallhere.com/photo/landscape-city-cityscape-building-reflection-skyline-skyscraper-evening-horizon-panorama-dusk-metropolis-downtown-landmark-metropolitan-area-human-settlement-geographical-feature-3750x1200-px-704180.jpg"/>
            </div>
            <div>
                <h1>Profile</h1>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile