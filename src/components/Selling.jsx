import React from 'react';
import '../styles/Selling.css';
import { SellingData } from '../data/Selling';
import SellingCard from './SellingCard';

const Selling = () => {
    return (
        <div className='sell'>
            <div className='header-container'>
                <hr className='divider-line' />
                <h1>OUR BEST-SELLING EQUIPMENT</h1>
                <hr className='divider-line' />
                </div>
            <div className='selling-card'>
                {
                    SellingData.map((item, idx) => <SellingCard data={item} key={idx} />)
                }
            </div>
            <div className='shop-all-container'>
                <button className='shop-all-btn'>Shop All</button>
            </div>        
        </div>
    );
};

export default Selling;
