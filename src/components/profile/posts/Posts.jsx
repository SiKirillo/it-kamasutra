import React from 'react';
import style from './Posts.module.css';
import PostItem from './postItem/PostItem';

class Posts extends React.Component {


    render = () => {
        let postElements = this.props.posts.map(post => <PostItem id={post.id}
                                                                  title={post.title}
                                                                  text={post.text}
                                                                  avatar={post.avatar}
                                                                  likesCount={post.likesCount}/>);

        let newPostElement = React.createRef();

        let addPost = () => {
            let newPost = newPostElement.current.value;
            this.props.addPost(newPost);
        };

        let onPostChange = () => {
            let text = newPostElement.current.value;
            this.props.updateNewPostText(text);
        };

        return (
            <div className={style.posts}>
                <h4>My posts</h4>
                <div>
                    <input onChange={onPostChange} ref={newPostElement} value={this.props.newPostText}/>
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