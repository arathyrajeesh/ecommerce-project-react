import React from 'react';
import { Link } from 'react-router-dom';

const GivingBackCard = ({ data, index }) => {
    return (
        <div className="giving-back-card">
        <div className="icon">{data.icon}</div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        {index === 1 && (
            <button className="read-more-btn"><Link to='/about' >Read More</Link></button>
        )}
        </div>
    );
};

export default GivingBackCard;
