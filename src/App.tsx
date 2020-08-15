import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {ProfilePage} from "./components/profile/ProfilePage";
import {DialogPage} from "./components/dialogs/DialogPage";
import {Navbar} from "./components/navbar/Navbar";
import appStyle from "./App.module.css";
import store, {StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className={appStyle.App}>

                <Header/>

                <Navbar/>

                <div className={appStyle.content}>

                    <Route path={"/profile"} render={() => <ProfilePage profileState={store._state.profilePage.posts}
                                                                        authorState={store._state.users.authors}
                                                                        dispatch={store.dispatch.bind(props.store)}/>}/>
                    <Route path={"/dialogs"} render={() => <DialogPage dialogState={store._state.dialogPage.dialogs}
                                                                       messageState={store._state.dialogPage.messages}
                                                                       authorState={store._state.users.authors}
                                                                       dispatch={store.dispatch.bind(props.store)}/>}/>
                    <Redirect from="/" to="/profile"/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
