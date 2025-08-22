import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/ProductData';
import '../styles/ProductDetails.css'

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>{product.info}</p>
        </div>
    );
};

export default ProductDetailPage;
