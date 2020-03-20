import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

class Dialogs extends React.Component {
    myDialogs = [
        {
            name: "Kira",
            id: "kira"
        },
        {
            name: "Sveta",
            id: "sveta"
        },
        {
            name: "Artes",
            id: "artes"
        },
        {
            name: "Foma",
            id: "foma"
        },
        {
            name: "Roma",
            id: "roma"
        }
    ];

    myMessages = [
        {
            text: "Hello #1"
        },
        {
            text: "Hello #2"
        },
        {
            text: "Hello #3"
        }
    ];

    render = () => {
        let dialogElements = this.myDialogs.map(dialog => <DialogItem name={dialog.name}
                                                                      id={dialog.id}/>);

        let messageElements = this.myMessages.map(message => <MessageItem text={message.text}/>);

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
