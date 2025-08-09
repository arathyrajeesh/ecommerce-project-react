import React from 'react'
import { products } from '../data/ProductData'
import '../styles/Another.css'


const Another = () => {
    return (
        <div className='another-container'>
            <span>Home/ All Products/{products.name}</span>
            <div className='another-list'>

            </div>
        </div>
    )
}

export default Another
