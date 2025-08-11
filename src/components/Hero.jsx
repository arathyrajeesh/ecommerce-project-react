import React from 'react';
import '../styles/hero.css';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <main className="hero-section">
        <div className="hero-content">
            <h1>BECOME <br/> ONE WITH <br /> NATURE</h1>
            <p>Everything You Need for the Perfect <br /> Travel Experience</p>
            <a className='cta-button'><Link to="/shop">Shop Our Range</Link></a>
        </div>
        </main>
    );
}

export default Hero;