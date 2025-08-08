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
                    onAddToCart={() => console.log("Add to Cart:", product)}
                />
            ))}
            <div className='load-container'>
                <button className='load-btn'>Shop All</button>
            </div>
        </div>
        
    );
};

export default ProductList;
