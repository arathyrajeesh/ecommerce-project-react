import React from 'react';
import { Link } from 'react-router-dom';

const SellingCard = (props) => {
    const { data } = props;

    return (
        <div className="product-card">
            {data.status && (
                <div className={`product-tag ${data.status.toLowerCase().replace(' ', '-')}`}>
                    {data.status}
                </div>
            )}
            <img src={data.image} alt={data.title} className="product-image" />
            <p className="product-title"> {data.title} </p>
            <div className="product-price">
                {data.salePrice ? (
                    <>
                        <span className="original-price">{data.price}</span>
                        <span className="sale-price">${data.salePrice.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="regular-price">{data.price}</span>
                )}
            </div>
            <hr className="product-divider" />
            <a><button className="add-to-cart-btn"><Link to="/cart">Add to Cart</Link></button></a>
        </div>
    );
};

export default SellingCard;
