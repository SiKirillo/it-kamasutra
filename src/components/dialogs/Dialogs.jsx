import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

class Dialogs extends React.Component {


    render = () => {
        let dialogElements = this.props.dialogState.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                                                      name={dialog.name}
        />);

        let messageElements = this.props.dialogState.messages.map(message => <MessageItem message={message.textMessage}/>);

        let newMessageElement = React.createRef();

        let addMessage = () => {
            let newMessage = newMessageElement.current.value;
            alert(newMessage);
            newMessageElement.current.value = "";
        };

        return (
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements}
                </div>
                <div className={style.messageItems}>
                    {messageElements}
                    <div>
                        <input ref={newMessageElement}/>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;
