import React from 'react';
import style from './../Dialogs.module.css';

class MessageItem extends React.Component {
    render = () => {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}

export default MessageItem;
