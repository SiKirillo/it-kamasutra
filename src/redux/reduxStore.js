import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
});

let store = createStore(reducers);

export default store;