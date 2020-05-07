const PROFILE_CONST = {
    ADD_POST: "ADD-POST",
    UPDATE_NEW_POST_TEXT: "UPDATE-NEW-POST-TEXT"
};

const profileReducer = (state, action) => {
    switch (action.type) {
        case PROFILE_CONST.ADD_POST: {
            if (action.newPost !== "") {
                let newPostId = state.posts.length + 1;
                let newPost = {
                    id: newPostId,
                    title: "PostItem #" + newPostId,
                    text: action.newPost,
                    avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
                    likesCount: 0
                };
                state.posts.push(newPost);
            }
            state.newPostText = "";
            break;
        }
        case PROFILE_CONST.UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newPostText;
            break;
        }
        default:
            break;
    }
    return state;
};

export const addPostActionCreator = (post) => {
    return {
        type: "ADD-POST",
        newPost: post
    }
};

export const updateNewPostActionCreator = (postText) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: postText
    }
};

export default profileReducer;