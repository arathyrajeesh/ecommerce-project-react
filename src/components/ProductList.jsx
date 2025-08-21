import React, { useState, useEffect } from 'react';
import '../styles/Search.css' 
import { FaSearch, FaTimes } from "react-icons/fa";
import { products } from '../data/ProductData';
import { Link } from 'react-router-dom';

const ProductList = ({ onAddToCart }) => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(products);
    const [sortOption, setSortOption] = useState('Recommended');

    useEffect(() => {
        let filtered = products.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        switch (sortOption) {
            case 'Price(low to high)':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'Price(high to low)':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'Name A-Z':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Name Z-A':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break; 
        }

        setFilteredItems(filtered);
    }, [query, sortOption]);

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
            <div className="sort-options">
                <p>Sort by :</p>
                <div className="sort-customize-group">
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option>Recommended</option>
                        <option>Price(low to high)</option>
                        <option>Price(high to low)</option>
                        <option>Name A-Z</option>
                        <option>Name Z-A</option>
                    </select>
                </div>
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
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    style={{ cursor: 'pointer' }} 
                                />
                                <h3>{item.name}</h3>
                                <h4>${item.price.toFixed(2)}</h4>
                            </Link>
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                            <button 
                                className="add-to-cart-btn" 
                                onClick={() => (item)}
                            >
                                OverView
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
