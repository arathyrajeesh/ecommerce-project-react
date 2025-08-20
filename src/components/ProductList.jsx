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
    
    const handleOpenOverview = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseOverview = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-list-container">
            <h1>SHOP</h1>
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart}
                    onShowOverview={handleOpenOverview} 
                />
            ))}
            

            <ProductOverviewModal 
                product={selectedProduct} 
                onClose={handleCloseOverview} 
                onAddToCart={handleAddToCart}
            />
        </div>
    );
};

export default ProductList;
