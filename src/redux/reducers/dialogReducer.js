const DIALOG_CONST = {
    ADD_MESSAGE: "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT: "UPDATE-NEW-MESSAGE-TEXT"
};

let initialState = {
    dialogPage: {
        dialogs: [
            {
                id: 1,
                name: "Kira",
            },
            {
                id: 2,
                name: "Sveta"
            },
            {
                id: 3,
                name: "Artes"
            },
            {
                id: 4,
                name: "Foma"
            },
            {
                id: 5,
                name: "Roma"
            }
        ],
        messages: [
            {
                id: 1,
                textMessage: "Hello #1"
            },
            {
                id: 2,
                textMessage: "Hello #2"
            },
            {
                id: 3,
                textMessage: "Hello #3"
            }
        ],
        newMessageText: "Hello #4"
    }
};

const dialogReducer = (state = initialState, action) => {
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