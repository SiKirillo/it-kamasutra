import React from "react";
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {AddItemForm} from "../forms/AddItemForm";
import dialogStyle from "./DialogPage.module.css";
import {AuthorType} from "../profile/ProfilePage";
import {ActionTypes, addMessageAC} from "../../redux/state";

type PropsType = {
    dialogState: Array<DialogType>,
    messageState: Array<MessageType>,
    authorState: Array<AuthorType>,
    dispatch: (action: ActionTypes) => void
}

export type DialogType = {
    id: string,
    name: string
}

export type MessageType = {
    id: string,
    message: string
}

export function DialogPage(props: PropsType) {

    const addMessage = (messageTitle: string) => {
        props.dispatch(addMessageAC(messageTitle));
    }

    return <div className={dialogStyle.dialogs}>
        <div className={dialogStyle.container}>
            <div className={dialogStyle.dialogWrapper}>
                <div>
                    {props.dialogState.map((d) => {
                        return <Dialog id={d.id} name={d.name}/>
                    })}
                </div>

                <div>
                    {props.messageState.map((m) => {
                        return <Message id={m.id} message={m.message}/>
                    })}

                    <AddItemForm addItem={addMessage}
                                 inputPlaceholder={"Your message"}/>
                </div>
            </div>
        </div>
    </div>
}