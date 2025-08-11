import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/header.css';
import { VscAccount } from "react-icons/vsc";

function Header() {
    const bannerMessages = ["15% OFF ALL TENTS", "WE SHIP WORLDWIDE"];
    const [currentBannerText, setCurrentBannerText] = useState(bannerMessages[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % bannerMessages.length);
        }, 5000);

        setCurrentBannerText(bannerMessages[currentIndex]);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem('access_token');
            setIsLoggedIn(!!token); 
        };
        checkLoginStatus(); 

        const updateCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const total = cart.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(total);
        };
        updateCount();

        window.addEventListener("cartUpdated", updateCount);
        return () => window.removeEventListener("cartUpdated", updateCount);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setIsLoggedIn(false);
        
    };

    return (
        <>
            <div className="top-banner">{currentBannerText}</div>
            <header className="main-header">
                <div className="header-left">
                    <a href="#" className="logo">MADAGASCAR</a>
                </div>
                <nav className="header-nav">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/user" className='user-link'>
                                    <VscAccount size={20} />
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login">LOGIN</Link>
                        </li>
                    )}

                    <li>
                        <Link to="/cart" className="cart-link">
                            <FaShoppingCart size={20} />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </li>
                </nav>
            </header>
        </>
    );
}

export default Header;