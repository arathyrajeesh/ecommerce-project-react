const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
        
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">${product.price.toFixed(2)}</p>
        
            <div className="product-buttons">
                <button className="buy-btn" onClick={() => onAddToCart(product)}>
                    Buy Now
                </button>
                <button className="overview-btn" >
                    Overview
                </button>
            </div>
        </div>
    );
};
export default ProductCard
