import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {PostType, ProfilePage} from "./components/profile/ProfilePage";
import {DialogPage, DialogType, MessageType} from "./components/dialogs/DialogPage";
import {v1} from "uuid";
import {Navbar} from "./components/navbar/Navbar";
import appStyle from "./App.module.css";

type PostStateType = {
    id: string,
    authorId: string,
    text: string,
    likesCount: number
}

type DialogStateType = {
    id: string,
    name: string
}

type MessageStateType = {
    id: string,
    message: string
}

type AuthorStateType = {
    id: string,
    photo: string
}

function App() {

    let postId1 = v1();
    let postId2 = v1();

    let authorId1 = v1();
    let authorId2 = v1();
    let authorId3 = v1();

    let messageId1 = v1();
    let messageId2 = v1();
    let messageId3 = v1();

    let [postState, setPostState] = useState<Array<PostStateType>>([
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
    ]);

    let [dialogState, setDialogState] = useState<Array<DialogStateType>>([
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
    ]);

    let [messageState, setMessageState] = useState<Array<MessageStateType>>([
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
    ]);

    let [authorState, setAuthorSate] = useState<Array<AuthorStateType>>([
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
    ])

    function addPost(postText: string) {
        let newPost: PostType = {
            id: v1(),
            authorId: authorId3,
            text: postText,
            likesCount: 0
        };
        setPostState([...postState, newPost]);
    }

    function addDialog(dialogName: string) {
        let newDialog: DialogType = {
            id: v1(),
            name: dialogName
        };
        setDialogState([...dialogState, newDialog]);
    }

    function addMessage(messageText: string) {
        let newMessage: MessageType = {
            id: v1(),
            message: messageText
        }
        setMessageState([...messageState, newMessage]);
    }

    function getAuthorPhoto(authorId: string): string {
        let authorPhoto = "";
        authorState.map((a)=> {
            if (a.id === authorId) {
                authorPhoto = a.photo;
            }
        })
        return authorPhoto;
    }

    return (
        <BrowserRouter>
            <div className={appStyle.App}>

                <Header/>

                <Navbar/>

                <div className={appStyle.content}>

                    <Route path={"/profile"} render={() => <ProfilePage profileState={postState}
                                                                        authorState={authorState}
                                                                        addPost={addPost}
                                                                        getAuthorPhoto={getAuthorPhoto}/>}/>
                    <Route path={"/dialogs"} render={() => <DialogPage dialogState={dialogState}
                                                                       messageState={messageState}
                                                                       authorState={authorState}
                                                                       addDialog={addDialog}
                                                                       addMessage={addMessage}/>}/>
                    <Redirect from="/" to="/profile"/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
