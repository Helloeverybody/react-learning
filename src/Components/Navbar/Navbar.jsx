import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.navbar}>
            <div className={s.urls_list}>
                <div className={s.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? `${s.active} ${s.item}` : `${s.nonactive} ${s.item}` }>Профиль</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? `${s.active} ${s.item}` : `${s.nonactive} ${s.item}` }>Сообщения</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? `${s.active} ${s.item}` : `${s.nonactive} ${s.item}` }>Музыка</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/photos" className = { navData => navData.isActive ? `${s.active} ${s.item}` : `${s.nonactive} ${s.item}` }>Фотографии</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar