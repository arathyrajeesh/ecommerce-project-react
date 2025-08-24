import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/ProductData';
import '../styles/Overview.css';

const ProductOverviewModal = ({ product: propProduct, onAddToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const product = propProduct || products.find(p => p.id === parseInt(id));

    const [color, setColor] = useState(product?.colorOptions?.[0] || '');
    const [temperature, setTemperature] = useState(product?.temperatureOptions?.[0] || '');
    const [quantity, setQuantity] = useState(1);

    if (!product) return <h2>Product not found</h2>;

    const handleAdd = () => {
        if (onAddToCart) {
            onAddToCart({ ...product, color, temperature, quantity });
        }
        navigate(-1); 
    };

    return (
        <div className="modal-overlay">
            <div className="overview-card">
                <button className="close-btn" onClick={() => navigate(-1)}>✖</button>
                
                <div className="overview-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="overview-details">
                    <h2>{product.name}</h2>
                    <h3>${product.price.toFixed(2)}</h3>
                    <p>SKU: {product.sku}</p>

                    {product.colorOptions && product.colorOptions.length > 0 && (
                        <div className="option-group">
                            <label>Color:</label>
                            <div className="colors">
                                {product.colorOptions.map((c, idx) => (
                                    <span
                                        key={idx}
                                        className={`color-circle ${c === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: c }}
                                        onClick={() => setColor(c)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.temperatureOptions && product.temperatureOptions.length > 0 && (
                        <div className="option-group">
                            <label>Temperature:</label>
                            <select value={temperature} onChange={(e) => setTemperature(e.target.value)}>
                                {product.temperatureOptions.map((t, idx) => (
                                    <option key={idx} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="option-group">
                        <label>Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        />
                    </div>

                    <button className="add-cart-btn" onClick={handleAdd}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductOverviewModal;
