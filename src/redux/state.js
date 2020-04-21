import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                title: "PostItem #1",
                text: "Hello!",
                avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
                likesCount: 2
            },
            {
                id: 2,
                title: "PostItem #2",
                text: "Goodbye!",
                avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
                likesCount: 5
            }
        ],
        newPostText: "it-kamasutra"
    },
    dialogPage: {
        dialogs: [
            {
                id: 1,
                name: "Kira",
            },
            {
                id: 2,
                name: "Sveta"
            },
            {
                id: 3,
                name: "Artes"
            },
            {
                id: 4,
                name: "Foma"
            },
            {
                id: 5,
                name: "Roma"
            }
        ],
        messages: [
            {
                textMessage: "Hello #1"
            },
            {
                textMessage: "Hello #2"
            },
            {
                textMessage: "Hello #3"
            }
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        title: "PostItem #3",
        text: postMessage,
        avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;