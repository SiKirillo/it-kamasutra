// import profileReducer from "./reducers/profileReducer";
// import dialogReducer from "./reducers/dialogReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     title: "PostItem #1",
//                     text: "Hello!",
//                     avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
//                     likesCount: 2
//                 },
//                 {
//                     id: 2,
//                     title: "PostItem #2",
//                     text: "Goodbye!",
//                     avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
//                     likesCount: 5
//                 }
//             ],
//             newPostText: "it-kamasutra"
//         },
//         dialogPage: {
//             dialogs: [
//                 {
//                     id: 1,
//                     name: "Kira",
//                 },
//                 {
//                     id: 2,
//                     name: "Sveta"
//                 },
//                 {
//                     id: 3,
//                     name: "Artes"
//                 },
//                 {
//                     id: 4,
//                     name: "Foma"
//                 },
//                 {
//                     id: 5,
//                     name: "Roma"
//                 }
//             ],
//             messages: [
//                 {
//                     id: 1,
//                     textMessage: "Hello #1"
//                 },
//                 {
//                     id: 2,
//                     textMessage: "Hello #2"
//                 },
//                 {
//                     id: 3,
//                     textMessage: "Hello #3"
//                 }
//             ],
//             newMessageText: "Hello #4"
//         }
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
//
//         this._callSubscriber(this._state);
//     }
// };
//
// window.store = store;
// export default store;