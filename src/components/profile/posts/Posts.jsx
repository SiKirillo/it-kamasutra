import React from 'react';
import style from './Posts.module.css';
import PostItem from './postItem/PostItem';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/profileReducer";

class Posts extends React.Component {
    render = () => {
        let postElements = this.props.posts.map(post => <PostItem id={post.id}
                                                                  title={post.title}
                                                                  text={post.text}
                                                                  avatar={post.avatar}
                                                                  likesCount={post.likesCount}/>);

        let newPostElement = this.props.newPostText;

        let addPost = () => {
            this.props.dispatch(addPostActionCreator(newPostElement));
        };

        let onPostChange = (e) => {
            let postText = e.target.value;
            this.props.dispatch(updateNewPostActionCreator(postText));
        };

        return (
            <div className={style.posts}>
                <h4>My posts</h4>
                <div>
                    <input onChange={onPostChange}
                           value={this.props.newPostText}
                           placeholder="New post"/>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
                <div className={style.postItems}>
                    {postElements}
                </div>
            </div>
        );
    }
}

export default Posts;