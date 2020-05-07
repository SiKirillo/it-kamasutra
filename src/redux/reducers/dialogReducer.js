const DIALOG_CONST = {
    ADD_MESSAGE: "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT: "UPDATE-NEW-MESSAGE-TEXT"
};

const dialogReducer = (state, action) => {
    switch (action.type) {
        case DIALOG_CONST.ADD_MESSAGE: {
            if (action.newMessage !== "") {
                let newMessageId = state.messages.length + 1;
                let newMessage = {
                    id: newMessageId,
                    textMessage: action.newMessage
                };
                state.messages.push(newMessage);
            }
            state.newMessageText = "";
            break;
        }
        case DIALOG_CONST.UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText;
            break;
        }
        default:
         break;
    }
    return state;
};

export const addMessageActionCreator = (message) => {
    return {
        type: "ADD-MESSAGE",
        newMessage: message
    }
};

export const updateNewMessageActionCreator = (messageText) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: messageText
    }
};

export default dialogReducer;