import React from "react";
import postStyle from "./Post.module.css";

type PostType = {
    id: string,
    authorId: string,
    text: string,
    likesCount: number,
    postIcon: string
}

export function Post(props: PostType) {

    return <div className={postStyle.post}>

        <div className={postStyle.postIcon}>
            {props.postIcon !== ""
                ? <img src={props.postIcon} alt=""/>
                : <img src="https://vk.com/images/camera_200.png?ava=1" alt=""/>}
        </div>

        <div className={postStyle.postText}>
            <span>{props.text}</span>
        </div>
        <div className={postStyle.postLikesCount}>
            <span>likes: {props.likesCount}</span>
        </div>

    </div>
}