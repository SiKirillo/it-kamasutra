import React from "react";
import {NavLink} from "react-router-dom";
import navbarStyle from "./Navbar.module.css"

export function Navbar() {
    return <div className={navbarStyle.navbar}>
        <div className={navbarStyle.container}>
            <nav className={navbarStyle.link}>
                <div>
                    <NavLink to="/profile" activeClassName={navbarStyle.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={navbarStyle.activeLink}>Dialogs</NavLink>
                </div>
            </nav>
        </div>
    </div>
}