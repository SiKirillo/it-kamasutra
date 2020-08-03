import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import state from "./redux/state";

function App() {

    let postElements = state.profilePage.posts.map(post => <div><
        span>{post.id}</span>
        <span>{post.title}</span>
        <span>{post.text}</span>
        <span>{post.likesCount}</span>
    </div>)

    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    <a href={"/hello"}>Hello</a>
                    <a href={"/bye"}>Bye</a>
                </div>

                {postElements}

                <Route path={"/hello"} render={() => <HelloMessage message={"Hello"}/>}/>
                <Route path={"/bye"} render={() => <ByeMessage message={"Bye"}/>}/>
            </div>
        </BrowserRouter>
    );
}

type MessageType = {
    message: string
};

function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

function ByeMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

export default App;
