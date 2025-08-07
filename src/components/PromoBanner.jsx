import React from 'react';
import '../styles/promobanner.css';


function PromoBanners() {
    return (
        <section className="promo-banners">
        <div className="promo-item first">
            <h3>GET READY FOR <br /> THE BIG CHILL</h3>
            {/* <p>Our New Jackets and Vests Collection</p> */}
        </div>
        <div className="promo-item second">
            <h3>SLEEP UNDER <br /> THE STARS</h3>
            {/* <p>Special Tent Sale - 15% OFF All Tents</p> */}
        </div>
        <div className="promo-item third">
            <h3>START PLANNING <br /> YOUR NEXT <br/> ADVENTURE</h3>
        </div>
        </section>
    );
}

export default PromoBanners;