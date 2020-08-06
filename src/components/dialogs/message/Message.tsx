import React from "react";
import messageStyle from "./Message.module.css";

type MessageType = {
    id: string,
    message: string
}

export function Message(props: MessageType) {
    return <div className={messageStyle.message}>
        <span>{props.message}</span>
    </div>
}