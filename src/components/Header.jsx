import React, { useState, useEffect } from 'react';
import '../styles/header.css';

function Header() {
    const bannerMessages = [
        "15% OFF ALL TENTS",
        "FREE SHIPPING ON ORDERS OVER $100",
        "NEW SUMMER COLLECTION IS LIVE!",
        "JOIN OUR NEWSLETTER FOR 10% OFF"
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
            <a href="#">HOME</a>
            <a href="#">SHOP</a>
            <a href="#">BLOG</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            </nav>
            <div className="header-right">
            <a href="#" className="cart-icon"></a>
            </div>
        </header>
        </>
    );
}

export default Header;