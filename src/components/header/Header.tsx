import React from "react";
import headerStyle from "./Header.module.css";

export function Header() {
    return <div className={headerStyle.header}>
        <div className={headerStyle.headerLogo}>
            <img
                src="https://avatars3.githubusercontent.com/u/27897079?s=460&u=a9b4ac17ae893961859aea4a2ae89ac6cd7ef513&v=4"
                alt=""/>
        </div>
        <div className={headerStyle.headerTitle}>
            <span>Header-Header-Header</span>
        </div>
    </div>
}