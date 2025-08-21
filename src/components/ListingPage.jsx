import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
import { FaSearch, FaTimes } from "react-icons/fa";
import { products } from '../data/ProductData';
import { Link } from 'react-router-dom';

const options = [
    { value: 'all', label: 'All' },
    { value: 'bestseller', label: 'Best Seller' },
    { value: 'sale', label: 'Sale' },
];

const ListingPage = () => {
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('all');
    const [dataList, setDataList] = useState(products);

    useEffect(() => {
        let filtered = products;

        //  Apply search
        if (query) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Apply filter
        if (sortType === 'bestseller') {
            filtered = filtered.filter(item => item.bestseller === true);
        } else if (sortType === 'sale') {
            filtered = filtered.filter(item => item.sale === true);
        }

        setDataList(filtered);
    }, [query, sortType]);

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
        <div className="product-main">
            <h1>Shop</h1>

            {/*  Search */}
            <div className="input-container">
                <FaSearch size={22} className="search-icon" />
                <input
                    className="input-bar"
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    aria-label="Search products"
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <FaTimes
                        size={22}
                        className="cross-icon"
                        onClick={clearSearch}
                    />
                )}
            </div>

            {/*  Filter */}
            <div className="sort-options">
                <p>Sort by :</p>
                <div className="filter-option">
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        {options.map((item, idx) => (
                            <option value={item.value} key={idx}>{item.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <hr className="line" />
            <h2 className="product-heading">Products</h2>

            <div className="products">
                {dataList.length === 0 ? (
                    <p className="no-results">No products found.</p>
                ) : (
                    dataList.map((item) => (
                        <div key={item.id} className="product-card">
                            <Link to={`/products/${item.id}`} className="product-card-link">
                                <img src={item.image} alt={item.name} style={{ cursor: 'pointer' }} />
                                <h3>{item.name}</h3>
                                <h4>${item.price.toFixed(2)}</h4>
                            </Link>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                            <Link to={`/overview/${item.id}`}>
                                <button className="add-to-cart-btn">Overview</button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ListingPage;
