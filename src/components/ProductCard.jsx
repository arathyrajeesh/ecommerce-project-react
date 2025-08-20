import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, onShowOverview }) => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product">
            <div className="product-card">
                <img 
                    src={product.image}  
                    alt={product.name}
                    onClick={handleImageClick} 
                    style={{ cursor: 'pointer' }} 
                />
            
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">${product.price.toFixed(2)}</p>
            
                <div className="product-buttons">
                    <button 
                        className="buy-btn" 
                        onClick={() => onAddToCart(product)}
                    >
                        Add to Cart
                    </button>

                    <button 
                        className="overview-btn" 
                        onClick={() => onShowOverview(product)}
                    >
                        Overview
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
