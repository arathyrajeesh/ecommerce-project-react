import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/ProductData';
import { FaTimes } from "react-icons/fa"; 
import '../styles/ProductDetails.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);
    if (!product) {
        return <h2>Product not found</h2>;
    }
    const handleAddToCart = (product) => {
        const userId = localStorage.getItem('user_id') || 'guest';
        const cartKey = `cart_${userId}`;
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += product.quantity;
            } else {
                cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: product.quantity
            });
        }
        localStorage.setItem(cartKey, JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
    <section className='product-view'>
        <div className="product-details">
            <Link to="/shop" className="continue-shopping-btn">
            <FaTimes />
            </Link>
            <img src={product.image} alt={product.name} />
            <div className='product-info'>
                <h1>{product.name}</h1>
                <p className="price">Price: ${product.price}</p>
                <p className="description">{product.info}</p>
                <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart({ ...product, quantity: 1 })}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </section>
    );
};

export default ProductDetailPage;
