import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

class Dialogs extends React.Component {


    render = () => {
        let dialogElements = this.props.dialogState.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                                      id={dialog.id}/>);

        let messageElements = this.props.dialogState.messages.map(message => <MessageItem text={message.text}/>);

        return (
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements}
                </div>
                <div className={style.messageItems}>
                    {messageElements}
                </div>
            </div>
        );
    }
}

export default Dialogs;
