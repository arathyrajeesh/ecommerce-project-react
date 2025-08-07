import React from 'react';
import '../styles/promobanner.css';
import {promoData} from '../data/PromoData.js'

    const PromoSection = () => {
    return (
        <div className="promo-container">
        {promoData.map((item, index) => (
            <div
            key={index}
            className="promo-card"
            style={{ backgroundImage: `url(${item.image})` }}
            >
            <div className="promo-overlay">
                <h2>{item.title}</h2>
                {item.subtitle && <p>{item.subtitle}</p>}
                <button>{item.buttonText}</button>
            </div>
            </div>
        ))}
        </div>
    );
    };

    export default PromoSection;
