import React, { useState } from 'react';
import '../styles/ProductCard.css'; 
import { products } from '../data/ProductData';
import ProductCard from '../components/ProductCard';

import { useNavigate } from 'react-router-dom';
import ProductOverviewModal from './Overview';

const ProductList = () => {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null); 

    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const handleOpenOverview = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseOverview = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-list-container">
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart}
                    onShowOverview={handleOpenOverview} 
                />
            ))}
            <div className='load-container'>
                <button className='load-btn'>Shop All</button>
            </div>
            
            <ProductOverviewModal 
                product={selectedProduct} 
                onClose={handleCloseOverview} 
                onAddToCart={handleAddToCart}
            />
        </div>
    );
};

export default ProductList;