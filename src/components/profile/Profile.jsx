import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';
import ProfileInfo from "./profileInfo/ProfileInfo";

class Profile extends React.Component {
    myPosts = [
        {
            title: "PostItem #1",
            text: "Hello!",
            avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
            likes: 2
        },
        {
            title: "PostItem #2",
            text: "Goodbye!",
            avatar: "https://avatars1.githubusercontent.com/u/27897079?s=460&v=4",
            likes: 5
        }
    ];

    render = () => {
        return (
            <div>
                <div>
                    <img className={style.backgroundPhoto} alt="img"
                         src="https://i1.wallbox.ru/wallpapers/main/201126/aaeb4e384deb3c7913a8a4dbb355ff99.jpg"/>
                </div>
                <ProfileInfo/>
                <Posts myPosts={this.myPosts}/>
            </div>
        );
    }
}

export default Profile;