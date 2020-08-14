import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {ProfilePage} from "./components/profile/ProfilePage";
import {DialogPage} from "./components/dialogs/DialogPage";
import {Navbar} from "./components/navbar/Navbar";
import appStyle from "./App.module.css";
import state, {addDialog, addMessage, addPost, getAuthorPhoto} from "./redux/state";

function App() {
    return (
        <BrowserRouter>
            <div className={appStyle.App}>

                <Header/>

                <Navbar/>

                <div className={appStyle.content}>

                    <Route path={"/profile"} render={() => <ProfilePage profileState={state.profilePage.posts}
                                                                        authorState={state.users.authors}
                                                                        addPost={addPost}
                                                                        getAuthorPhoto={getAuthorPhoto}/>}/>
                    <Route path={"/dialogs"} render={() => <DialogPage dialogState={state.dialogPage.dialogs}
                                                                       messageState={state.dialogPage.messages}
                                                                       authorState={state.users.authors}
                                                                       addDialog={addDialog}
                                                                       addMessage={addMessage}/>}/>
                    <Redirect from="/" to="/profile"/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
