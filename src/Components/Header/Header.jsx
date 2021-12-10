import React from "react";
import s from './Header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
            <div className={s.header_content}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg?uselang=ru"/>
                <h2 className={s.header_text}>РЕАКТОРСКАЯ СОЦСЕТЬ</h2>
            </div>
        </header>
    );
}

export default Header