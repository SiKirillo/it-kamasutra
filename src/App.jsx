import React from 'react';
import style from './App.module.css';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import state from "./redux/state";

class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                <div className={style.appWrapper}>
                    <Header/>
                    <Navbar/>
                    <div className={style.appWrapperContent}>
                        <Route path="/profile" render={() => <Profile profileState={this.props.state.profilePage}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogState={this.props.state.dialogPage}/>}/>
                        <Route path="/news" render={() => <News news={this.props.state.news}/>}/>
                        <Route path="/music" render={() => <Music music={this.props.state.music}/>}/>
                        <Route path="/settings" render={() => <Settings settings={this.props.state.settings}/>}/>
                        <Redirect from="/" to="/profile"/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
