import React from 'react';
import { useNavigate } from 'react-router-dom';

const SellingCard = ({ data }) => {
    // The useNavigate hook is no longer needed if you're not navigating, but we'll keep it just in case you want to use it for other links.
    const navigate = useNavigate();

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.id === data.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...data, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        
        // This line dispatches an event that the Header component is listening for.
        // It's what makes the cart count update automatically.
        window.dispatchEvent(new Event("cartUpdated"));

        // *** REMOVED: The navigate("/cart") call has been removed. ***
        // The user will now remain on the current page.
    };

    return (
        <div className="product-card">
            {data.status && (
                <div className={`product-tag ${data.status.toLowerCase().replace(' ', '-')}`}>
                    {data.status}
                </div>
            )}
            <img src={data.image} alt={data.title} className="product-image" />
            <p className="product-title">{data.title}</p>
            <div className="product-price">
                {data.salePrice ? (
                    <>
                        <span className="original-price">${data.price.toFixed(2)}</span>
                        <span className="sale-price">${data.salePrice.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="regular-price">${data.price.toFixed(2)}</span>
                )}
            </div>
            <hr className="product-divider" />
            <button
                className="add-to-cart-btn"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default SellingCard;