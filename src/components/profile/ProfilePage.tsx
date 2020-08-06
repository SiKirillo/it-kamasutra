import React from "react";
import {Post} from "./post/Post";
import {AddItemForm} from "../forms/AddItemForm";
import profileStyle from "./ProfilePage.module.css";

type PropsType = {
    profileState: Array<PostType>,
    authorState: Array<AuthorType>,
    addPost: (postText: string, postLikesCount: number) => void,
    getAuthorPhoto: (authorId: string) => string
}

export type PostType = {
    id: string,
    authorId: string,
    text: string,
    likesCount: number
}

export type AuthorType = {
    id: string,
    photo: string
}

export function ProfilePage(props: PropsType) {

    const addPost = (postText: string) => {
        props.addPost(postText, 0);
    };

    const getAuthorPhoto = (authorId: string) => {
        return props.getAuthorPhoto(authorId);
    };

    return <div className={profileStyle.profile}>

        <div className={profileStyle.container}>

            <div className={profileStyle.photo}>
                <img
                    src="https://avatars3.githubusercontent.com/u/27897079?s=460&u=a9b4ac17ae893961859aea4a2ae89ac6cd7ef513&v=4"
                    alt=""/>
            </div>

            {props.profileState.map((p) => {
                return <Post id={p.id}
                             authorId={p.authorId}
                             text={p.text}
                             likesCount={p.likesCount}
                             postIcon={getAuthorPhoto(p.authorId)}/>
            })}

            <AddItemForm addItem={addPost}
                         inputPlaceholder={"Your post"}/>
        </div>

    </div>
}