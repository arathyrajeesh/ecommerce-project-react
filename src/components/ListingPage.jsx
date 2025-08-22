import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
import { FaSearch, FaTimes } from "react-icons/fa";
import { products } from '../data/ProductData';
import ProductOverviewModal from './Overview';
import { useNavigate } from 'react-router-dom';

const options = [
    { value: 'all', label: 'All' },
    { value: 'bestseller', label: 'Best Seller' },
    { value: 'sale', label: 'Sale' },
    { value: 'lowtohigh', label: 'Price: Low to High' },
    { value: 'hightolow', label: 'Price: High to Low' },
];

const ListingPage = ({ data }) => {
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('all');
    const [dataList, setDataList] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        let filtered = [...products]; 

        if (query) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (sortType === 'bestseller') {
            filtered = filtered.filter(item => item.bestseller === true);
        } else if (sortType === 'sale') {
            filtered = filtered.filter(item => item.sale === true);
        } else if (sortType === 'lowtohigh') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortType === 'hightolow') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        setDataList(filtered);
    }, [query, sortType]);

    const clearSearch = () => setQuery('');

    const handleAddToCart = (item) => {
        const userId = localStorage.getItem('user_id') || 'guest';
        const cartKey = `cart_${userId}`;
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        const existingItem = cart.find(cartItem =>
            cartItem.id === item.id &&
            cartItem.color === item.color &&
            cartItem.temperature === item.temperature
        );
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push(item);
        }

        localStorage.setItem(cartKey, JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };
    const navigate = useNavigate();
    const handleImageClick = (id) => {
        navigate(`/products/${id}`);
    };
    

    return (
        <div className="product-main">
            <h1>Shop</h1>

            <div className="input-container">
                <FaSearch size={22} className="search-icon" />
                <input
                    className="input-bar"
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && <FaTimes size={22} className="cross-icon" onClick={clearSearch} />}
            </div>

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
                            <img 
                            src={item.image} 
                            alt={item.name} 
                            style={{ cursor: 'pointer' }} 
                            onClick={() => handleImageClick(item.id)} 
                            />

                            <h3>{item.name}</h3>
                            <h4>${item.price.toFixed(2)}</h4>

                            <button className="add-to-cart-btn" onClick={() => handleAddToCart({ ...item, quantity: 1 })}>
                                Add to Cart
                            </button>
                            <button className="add-to-cart-btn" onClick={() => setSelectedProduct(item)}>
                                Overview
                            </button>
                        </div>
                    ))
                )}
            </div>

            {selectedProduct && (
                <ProductOverviewModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={handleAddToCart}
                />
            )}
        </div>
    );
};

export default ListingPage;
