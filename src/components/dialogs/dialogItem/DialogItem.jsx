import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

class DialogItem extends React.Component {
    render = () => {
        let urlPath = "/dialogs/" + this.props.id;
        return (
            <div>
                <NavLink to={urlPath}>
                    {this.props.name}
                </NavLink>
            </div>
        );
    }
}

export default DialogItem;
