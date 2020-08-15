import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, {StoreType} from "./redux/state";

export const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};