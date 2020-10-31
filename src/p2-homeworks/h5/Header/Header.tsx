import React from "react";
import {PATH} from "../Routes";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import menuIcon from "../../../assets/menu.png"


function Header() {
    return (
        <nav className={s.nav}>
            <div className={s.menuBtn}>
                <img src={menuIcon} alt="btn"/>
            </div>
            <NavLink to={PATH.PRE_JUNIOR}><span>Вайтишник</span></NavLink>
            <NavLink to={PATH.JUNIOR}><span>Джуниор</span></NavLink>
        </nav>
    );
}

export default Header;
