import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/ProductData';
import '../styles/ProductDetails.css'


function ProductDetails({ addToCart }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }
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
        <div className="product-details">
            <img src={product.image} alt={product.name} className="product-details-image" />
            <div className="product-details-info">
                <h2>{product.name}</h2>
                <p className="price">${product.price.toFixed(2)}</p>
                <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(product)}
                >
                    Add to Cart
                </button>
                <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(product)}
                >
                    OverView
                </button>
                <p>{product.info}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
