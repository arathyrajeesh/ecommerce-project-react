import { useParams } from "react-router-dom";
import { products } from "../data/ProductData";
import "../styles/ProductDetails.css";

const ProductDetail = ({ onAddToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <h2 className="not-found">Product not found</h2>;

    const handleAddToCart = (item) => {
        const userId = localStorage.getItem('user_id') || 'guest';  
        const cartKey = `cart_${userId}`;
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem(cartKey, JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="description">{product.info}</p>
                <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
