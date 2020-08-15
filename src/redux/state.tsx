import {v1} from "uuid";
import {PostType} from "../components/profile/ProfilePage";
import {rerenderEntireTree} from "../render";

type PostsType = {
    id: string,
    authorId: string,
    text: string,
    likesCount: number
}

type DialogType = {
    id: string,
    name: string
}

type MessageType = {
    id: string,
    message: string
}

type AuthorType = {
    id: string,
    photo: string
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type UserType = {
    authors: Array<AuthorType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType,
    users: UserType
}

export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    dispatch: (action: ActionTypes) => void | string
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addDialogAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof getAuthorPhotoAC>;

const postId1 = v1();
const postId2 = v1();

const authorId1 = v1();
const authorId2 = v1();
const authorId3 = v1();

const messageId1 = v1();
const messageId2 = v1();
const messageId3 = v1();

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: postId1,
                    authorId: authorId1,
                    text: "Hello!",
                    likesCount: 2
                },
                {
                    id: postId2,
                    authorId: authorId2,
                    text: "Goodbye!",
                    likesCount: 5
                }
            ]
        },
        dialogPage: {
            dialogs: [
                {
                    id: authorId1,
                    name: "Kira",
                },
                {
                    id: authorId2,
                    name: "Sveta"
                },
                {
                    id: authorId3,
                    name: "Artes"
                }
            ],
            messages: [
                {
                    id: messageId1,
                    message: "Hi, Kira",
                },
                {
                    id: messageId2,
                    message: "Hi, Sveta"
                },
                {
                    id: messageId3,
                    message: "Hi, Kolia"
                }
            ]
        },
        users: {
            authors: [
                {
                    id: authorId1,
                    photo: "https://sun2.beltelecom-by-minsk.userapi.com/impg/c853524/v853524924/23c044/rOBDLnTSxrY.jpg?size=200x0&quality=90&sign=b7d21d0ace845a96f5aaa66f6709b7ae&ava=1"
                },
                {
                    id: authorId2,
                    photo: "https://sun1.beltelecom-by-minsk.userapi.com/impg/c856120/v856120105/22d259/wHSf8YK9RAY.jpg?size=200x0&quality=90&sign=fefd1d998bb4448a237c6873ad41beff&ava=1"
                },
                {
                    id: authorId3,
                    photo: "https://sun1.beltelecom-by-minsk.userapi.com/impg/htbhN_2hbonxtG2rSiSW5UlyUP_ZgPTgIxXAwA/eQTeCgNnoKA.jpg?size=200x0&quality=90&sign=6df8ec3c33f7c419d553075c0d69f148&ava=1"
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        switch (action.type) {
            case "ADD_POST": {
                let newPost: PostType = {
                    id: v1(),
                    authorId: authorId3,
                    text: action.postText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost);
                rerenderEntireTree(store);
                break;
            }
            case "ADD_DIALOG": {
                let newDialog: DialogType = {
                    id: v1(),
                    name: action.dialogName
                };
                this._state.dialogPage.dialogs.push(newDialog);
                rerenderEntireTree(store);
                break;
            }
            case "ADD_MESSAGE": {
                let newMessage: MessageType = {
                    id: v1(),
                    message: action.messageText
                }
                this._state.dialogPage.messages.push(newMessage);
                rerenderEntireTree(store);
                break;
            }
            case "GET_AUTHOR_PHOTO": {
                let authorPhoto = "";
                this._state.users.authors.map((a) => {
                    if (a.id === action.authorId) {
                        authorPhoto = a.photo;
                    }
                })
                return authorPhoto;
            }
        }
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: "ADD_POST",
        postText: postText
    } as const
}

export const addDialogAC = (dialogName: string) => {
    return {
        type: "ADD_DIALOG",
        dialogName: dialogName
    } as const
}

export const addMessageAC = (messageText: string) => {
    return {
        type: "ADD_MESSAGE",
        messageText: messageText
    } as const
}

export const getAuthorPhotoAC = (authorId: string) => {
    return {
        type: "GET_AUTHOR_PHOTO",
        authorId: authorId
    } as const
}

export default store;