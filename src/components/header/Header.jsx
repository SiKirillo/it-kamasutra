import React from 'react';
import style from './Header.module.css';

class Header extends React.Component {
    render = () => {
        return (
            <header className={style.header}>
                <img alt="img"
                     src="https://yt3.ggpht.com/a/AGF-l78AXmgkuPuoLmWhtlUMKoVEcCmMkRmuTfbraQ=s900-c-k-c0xffffffff-no-rj-mo"/>
            </header>
        );
    }
}

export default Header;