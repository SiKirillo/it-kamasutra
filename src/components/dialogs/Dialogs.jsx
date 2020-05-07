import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/reducers/dialogReducer";

class Dialogs extends React.Component {


    render = () => {
        let dialogElements = this.props.dialogState.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                                                      name={dialog.name}
        />);

        let messageElements = this.props.dialogState.messages.map(message => <MessageItem
            message={message.textMessage}/>);

        let newMessageElement = this.props.dialogState.newMessageText;

        let addMessage = () => {
            this.props.dispatch(addMessageActionCreator(newMessageElement));
        };

        let onMessageChange = (e) => {
            let messageText = e.target.value;
            this.props.dispatch(updateNewMessageActionCreator(messageText));
        };

        return (
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements}
                </div>
                <div className={style.messageItems}>
                    {messageElements}
                    <div>
                        <input onChange={onMessageChange}
                               value={this.props.dialogState.newMessageText}
                               placeholder="New message"/>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;
