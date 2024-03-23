import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header({collapsed}) {
    return (
        <header className={collapsed ? 'collapsed' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
                </a>
            </div>
            <div>
                <nav>
                <ul className='navbar-top'>
                    <li className='navbar-elements'><NavLink to= '/'>Anasayfa</NavLink></li>
                    <li className='navbar-elements'><NavLink to= '/tv-series'>Diziler</NavLink></li>
                    <li className='navbar-elements'><NavLink to= '/movies'>Filmler</NavLink></li>
                    <li className='navbar-elements'><NavLink to= '/whats-new'>Yeni ve Popüler</NavLink></li>
                </ul>
                </nav>
            </div>
            <div className="header-user-img">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    )
}

export default Header