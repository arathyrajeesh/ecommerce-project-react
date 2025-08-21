import { useParams } from "react-router-dom";
import { products } from "../data/ProductData";
import "../styles/Overview.css";

const OverviewPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <h2 className="not-found">Product not found</h2>;

    return (
        <div className="overview-container">
        <div className="overview-card">
            <div className="overview-image">
            <img src={product.image} alt={product.name} />
            </div>
            <div className="overview-details">
            <h1>{product.name}</h1>
            <h2>${product.price.toFixed(2)}</h2>
            <p className="overview-description">
                {product.info}
            </p>

            <button className="overview-btn">Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default OverviewPage;
