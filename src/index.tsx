import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import store from "./redux/state";

rerenderEntireTree(store);

serviceWorker.unregister();
