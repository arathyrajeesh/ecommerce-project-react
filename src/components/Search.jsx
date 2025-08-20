import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from "react-icons/fa";
import { products } from '../data/ProductData';
import '../styles/Search.css';

function Search() {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(products);

    useEffect(() => {
        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
    }, [query]);

    const clearSearch = () => {
        setQuery('');
    };

    const handleAddToCart = (item) => {
        const userId = localStorage.getItem('user_id') || 'guest';  
        const cartKey = `cart_${userId}`;
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem(cartKey, JSON.stringify(cart));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <div className='product-main'>
            <div className='input-container'>
                <FaSearch size={22} className='search-icon' />
                <input
                    className='input-bar'
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    aria-label="Search products"
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <FaTimes
                        size={22}
                        className='cross-icon'
                        onClick={clearSearch}
                    />
                )}
            </div>

            <hr className='line' />
            <h2 className='product-heading'>Products</h2>

            <div className="products">
                {filteredItems.length === 0 ? (
                    <p className="no-results">No products found.</p>
                ) : (
                    filteredItems.map((item) => (
                        <div key={item.id} className="product-card">
                            <Link to={`/productDetails/${item.id}`} className="product-card-link">
                                <img src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                                <h4>${item.price.toFixed(2)}</h4>
                            </Link>
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Search;
