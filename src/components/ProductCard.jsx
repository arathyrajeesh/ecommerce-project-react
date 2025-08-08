import { Link } from "react-router-dom";



const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product">
        <div className="product-card">
            <img src={product.image}/>
        
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">${product.price.toFixed(2)}</p>
        
            <div className="product-buttons">
                <button className="buy-btn" onClick={() => onAddToCart(product)}>
                    Buy Now
                </button>
                <a><button className="overview-btn"><Link to ="/overview">OverView</Link></button></a>
            </div>
        </div>
        </div>
    );
};
export default ProductCard
