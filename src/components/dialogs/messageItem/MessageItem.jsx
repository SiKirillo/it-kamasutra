import React from 'react';
import style from './../Dialogs.module.css';

class MessageItem extends React.Component {
    render = () => {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default MessageItem;