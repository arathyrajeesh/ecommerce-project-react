import React from 'react';
import '../styles/GivingBack.css';
import { GivingBackData } from '../data/GivingBack';
import GivingBackCard from './GivingBackCard';

const GivingBack = () => {
    return (
        <div className='giving-back'>
            <h1>GIVING BACK</h1>
            <div className='card-container'>
                {
                    GivingBackData.map((item, idx) => <GivingBackCard data={item} key={idx} />)
                }
            </div>
            <button className='read-more'>Read More</button>
        </div>
    );
};

export default GivingBack;