import React from "react";
import prof from './Profile.module.css';

const Profile = () => {
    return <div className={prof.appProfile}>
        <div>
            <img className={prof.backgroundPhoto} alt='Background photo' src='https://i1.wallbox.ru/wallpapers/main/201126/aaeb4e384deb3c7913a8a4dbb355ff99.jpg'/>
        </div>
        <div>
            <img className={prof.avatar} alt='My photo' src='https://avatars1.githubusercontent.com/u/27897079?s=460&v=4'/>
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={prof.posts}>
                <div className={prof.item}>
                    Post #1
                </div>
                <div className={prof.item}>
                    Post #2
                </div>
            </div>
        </div>
    </div>
};

export default Profile;