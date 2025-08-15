import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const getCartKey = () => {
        const userId = localStorage.getItem('user_id');
        return userId ? `cart_${userId}` : null;
    };

    useEffect(() => {
        const cartKey = getCartKey();
        if (cartKey) {
            const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
            setCartItems(storedCart);
        }
    }, []);

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        const cartKey = getCartKey();
        if (cartKey) {
            localStorage.setItem(cartKey, JSON.stringify(updatedCart));
            window.dispatchEvent(new Event("cartUpdated"));
        }
    };

    const removeItem = (id) => {
        updateCart(cartItems.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        updateCart(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        updateCart(cartItems.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(Boolean));
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const price = item.salePrice || item.price;
        return total + (price * item.quantity);
    }, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                    <p>Your cart is empty.</p>
                    <Link to="/shop"><button className="continue-shopping-btn">Continue Shopping</button></Link>
                </div>
            ) : (
                <>
                    <div className="cart-item-list">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="item-details">
                                    <h4>{item.title}</h4>
                                    <p>Price: ${item.salePrice ? item.salePrice.toFixed(2) : item.price.toFixed(2)}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                                <div className="item-actions">
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        <Link to="/checkout"><button className="checkout-btn">Checkout</button></Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
