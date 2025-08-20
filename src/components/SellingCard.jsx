import React from 'react';
import { useNavigate } from 'react-router-dom';

const SellingCard = ({ data, onAddToCart }) => {
    const navigate = useNavigate();

    return (
        <div className="product-card">
            {data.status && (
                <div className={`product-tag ${data.status.toLowerCase().replace(' ', '-')}`}>
                    {data.status}
                </div>
            )}
            <img
                src={data.image}
                alt={data.title}
                className="product-image"
            />
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
                onClick={() => onAddToCart(data)} 
            >
                Add to Cart
            </button>
        </div>
    );
};

export default SellingCard;
