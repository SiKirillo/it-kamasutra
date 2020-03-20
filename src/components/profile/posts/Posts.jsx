import React from 'react';
import style from './Posts.module.css';
import PostItem from './postItem/PostItem';

class Posts extends React.Component {
    render = () => {
        let postElements = this.props.myPosts.map(post => <PostItem title={post.title}
                                                                    text={post.text}
                                                                    avatar={post.avatar}
                                                                    likes={post.likes}/>);
        return (
            <div className={style.posts}>
                <h4>My posts</h4>
                <div>
                    <input/>
                    <button>Add post</button>
                </div>
                <div className={style.postItems}>
                    {postElements}
                </div>
            </div>
        );
    }
}

export default Posts;