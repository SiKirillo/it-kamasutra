import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';
import ProfileInfo from "./profileInfo/ProfileInfo";

class Profile extends React.Component {
    render = () => {
        return (
            <div>
                <div className={style.backgroundPhoto}>
                    <img alt="img"
                         src="https://i1.wallbox.ru/wallpapers/main/201126/aaeb4e384deb3c7913a8a4dbb355ff99.jpg"/>
                </div>
                <ProfileInfo/>
                <Posts posts={this.props.profileState.posts}/>
            </div>
        );
    }
}

export default Profile;