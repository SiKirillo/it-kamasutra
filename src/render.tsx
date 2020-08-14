import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {RootStateType} from "./redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};