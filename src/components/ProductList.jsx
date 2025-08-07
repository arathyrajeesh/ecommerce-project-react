import React from 'react';
import '../styles/ProductCard.css'; 
import { products } from '../data/ProductData';
import ProductCard from '../components/ProductCard'


const ProductList = () => {
    return (
        <div className="product-list-container">
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={() => console.log("Add to Cart:", product.name)}
                />
            ))}
        </div>
    );
};

export default ProductList;
