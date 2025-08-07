import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';


function Header() {
    const bannerMessages = [
        "15% OFF ALL TENTS",
        "WE SHIP WORLDWIDE",
    ];

    const [currentBannerText, setCurrentBannerText] = useState(bannerMessages[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % bannerMessages.length);
        }, 5000);

        setCurrentBannerText(bannerMessages[currentIndex]);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <>
        <div className="top-banner">
            {currentBannerText}
        </div>
        <header className="main-header">
            <div className="header-left">
                <a href="#" className="logo"> MADAGASCAR</a>
            </div>
            <nav className="header-nav">
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/shop'}>SHOP</Link></li>
                    <li><Link to={'/blog'}>BLOG</Link></li>
                    <li><Link to={'/about'}>ABOUT</Link></li>
                    <li><Link to={'/contact'}>CONTACT</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
            </nav>
            <div className="header-right">
                <a href="#" className="cart-icon"></a>
            </div>
        </header>
        </>
    );
}

export default Header;