
import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header({collapsed}) {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleProfileMouseOver = () => {
        setMenuOpen(true);
    };

    const handleProfileMouseLeave = () => {
        setMenuOpen(false);
    };

    const handleMenuMouseOver = () => {
        setMenuOpen(true);
    };

    const handleMenuMouseLeave = () => {
        // Menüden ayrılırken menüyü kapatmayı geciktir
        setTimeout(() => {
            setMenuOpen(false);
        }, 200);
    };

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
                    <li id= 'homepage'className='navbar-elements'><NavLink to= '/'>Ana Sayfa</NavLink></li>
                    <li className='navbar-elements'><NavLink to= '/tv-series'>Diziler</NavLink></li>
                    <li className='navbar-elements'><NavLink to= '/movies'>Filmler</NavLink></li>
                    <li className='navbar-elements'><NavLink to= '/my-list'>Listem</NavLink></li>
                  
                </ul>
                </nav>
            </div>
            <div className="header-user-img">
                <a href="/" onMouseOver={handleProfileMouseOver} onMouseLeave={handleProfileMouseLeave}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Avatar" />
                </a>
                {menuOpen && (
                    <div className="header-dropdown" onMouseOver={handleMenuMouseOver} onMouseLeave={handleMenuMouseLeave}>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><NavLink to="/account">Hesap</NavLink></li>
                            <li className="dropdown-item"><NavLink to="/my-list">Listem</NavLink></li>
                            <li className="dropdown-item"><NavLink to="/">Çıkış Yap</NavLink></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header