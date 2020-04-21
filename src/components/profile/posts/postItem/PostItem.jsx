import React from 'react';
import style from './PostItem.module.css';

class PostItem extends React.Component {
    render = () => {
        return (
            <div>
                <div className={style.item}>
                    <img alt="img" src={this.props.avatar}/>
                    <div>
                        <span>
                            {this.props.title}
                        </span>
                    </div>
                    <div>
                        <span>
                            {this.props.text}
                        </span>
                    </div>
                    <div>
                        <span>
                            likes: {this.props.likesCount}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;