import React from "react";
import {NavLink} from "react-router-dom";
import dialogStyle from "./Dialog.module.css";

type DialogType = {
    id: string,
    name: string
}

export function Dialog(props: DialogType) {

    let urlPath = "/dialogs/" + props.id;

    return <div className={dialogStyle.link}>

        <NavLink to={urlPath} activeClassName={dialogStyle.activeLink}>
            <span>{props.name}</span>
        </NavLink>

    </div>
}