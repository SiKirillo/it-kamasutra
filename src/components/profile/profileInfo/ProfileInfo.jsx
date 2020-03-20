import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
    render = () => {
        return (
            <div>
                <img className={style.avatar} alt="img"
                     src="https://avatars1.githubusercontent.com/u/27897079?s=460&v=4"/>
                <div className={style.profileDescription}>
                    Profile description
                </div>
            </div>
        );
    }
}

export default ProfileInfo;