import React from 'react';
import '../styles/Selling.css';
import { SellingData } from '../data/Selling';
import SellingCard from './SellingCard';
import { Link } from 'react-router-dom';

const Selling = () => {

    const handleAddToCart = (product) => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            alert("Please log in to add items to cart");
            return;
        }

        const cartKey = `cart_${userId}`;
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem(cartKey, JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <div className='sell'>
            <div className='header-container'>
                <hr className='divider-line' />
                <h1>OUR BEST-SELLING EQUIPMENT</h1>
                <hr className='divider-line' />
            </div>

            <div className='selling-card'>
                {SellingData.map((item, idx) => (
                    <SellingCard 
                        data={item} 
                        key={idx} 
                        onAddToCart={handleAddToCart} 
                    />
                ))}
            </div>

            <div className='shop-all-container'>
                <Link to='/shop'>
                    <button className='shop-all-btn'>Shop All</button>
                </Link>
            </div>
        </div>
    );
};

export default Selling;
