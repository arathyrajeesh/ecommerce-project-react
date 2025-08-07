import React from 'react'
import '../styles/Selling.css'
import { SellingData } from '../data/Selling'
import SellingCard from './SellingCard'


const Selling = () => {
    return (
        <div className='sell'>
            <h1>  OUR BEST-SELLING EQUIPMENT  </h1>
            <div className='selling-card'>
                {
                    SellingData.map((item,idx) => <SellingCard data={item} key={idx}/>)
                }
            </div>
            <hr />
            <button>Shop All</button>
        </div>
    )
}

export default Selling
