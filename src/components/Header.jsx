import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/header.css';
import { VscAccount } from "react-icons/vsc";

function Header() {
    const bannerMessages = ["15% OFF ALL TENTS", "WE SHIP WORLDWIDE"];
    const [currentBannerText, setCurrentBannerText] = useState(bannerMessages[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

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
            const userId = localStorage.getItem('user_id');
            if (userId) {
                const cart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
                const total = cart.reduce((sum, item) => sum + item.quantity, 0);
                setCartCount(total);
            } else {
                setCartCount(0);
            }
        };
        updateCount();

        window.addEventListener("cartUpdated", updateCount);
        return () => window.removeEventListener("cartUpdated", updateCount);
    }, []);

    return (
        <>
            <div className="top-banner">{currentBannerText}</div>
            <header className="main-header">
                <div className="header-left">
                    <a href="#" className="logo">MADAGASCAR</a>
                </div>
                <nav className="header-nav">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>HOME</NavLink></li>
                    <li><NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>SHOP</NavLink></li>
                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active-link" : ""}>BLOG</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>ABOUT</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT</NavLink></li>

                    {isLoggedIn ? (
                        <li>
                            <NavLink to="/user" className={({ isActive }) => isActive ? "active-link" : "user-link"}>
                                <VscAccount size={20} />
                            </NavLink>
                        </li>
                    ) : (
                        <li><NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>LOGIN</NavLink></li>
                    )}

                    <li>
                        <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link cart-link" : "cart-link"}>
                            <FaShoppingCart size={20} />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </NavLink>
                    </li>
                </nav>
            </header>
        </>
    );
}

export default Header;
