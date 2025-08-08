import React from 'react';
import '../styles/Overview.css';

const ProductOverviewModal = ({ product, onClose, onAddToCart }) => {
    if (!product) {
        return null; 
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <div className="modal-image-container">
                        <img src={product.image} alt={product.name} className="modal-image" />
                    </div>
                    <div className="modal-details">
                        <h2 className="modal-product-name">{product.name}</h2>
                        <p className="modal-price">${product.price.toFixed(2)}</p>
                        <p className="modal-sku">SKU: 0015</p>
                        <div className="modal-options">
                            <p>Quantity:</p>
                            <div className="quantity-selector">
                                <input type="number" defaultValue="1" min="1" />
                            </div>
                        </div>
                        <button className="modal-add-to-cart-btn" onClick={() => onAddToCart(product)}>
                            Add to Cart
                        </button>
                        <p className="modal-view-details-link">View More Details</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverviewModal;