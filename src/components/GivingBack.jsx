import React from 'react';
import '../styles/GivingBack.css';
import { GivingBackData } from '../data/GivingBack';
import GivingBackCard from './GivingBackCard'; 

const GivingBack = () => {
    return (
        <section className="giving-back">
        <h2 className="giving-back-title">GIVING BACK</h2>
        <div className="giving-back-cards">
            {GivingBackData.map((data, index) => (
            <GivingBackCard key={index} data={data} index={index} />
            ))}
        </div>
        </section>
    );
};

export default GivingBack;
