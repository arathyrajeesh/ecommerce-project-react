import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
        setEmail('');
    };

    return (
        <footer className="footer-container">
            <div className="footer-map-bg"></div>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>MADAGASCAR</h3>
                    <p>500 Terry Francine Street</p>
                    <p>San Francisco, CA 94158</p>
                    <p>Tel: 123-456-7890</p>
                    <p>info@my-domain.com</p>
                </div>
                <div className="footer-section">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Stockists</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Store Policy</a></li>
                        <li><a href="#">Payment Methods</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Socials</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Pinterest</a></li>
                    </ul>
                </div>
                <div className="footer-section newsletter">
                    <h3>Newsletter</h3>
                    <p>Get our news and updates</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email here *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="newsletter-checkbox">
                            <input type="checkbox" id="subscribe-checkbox" required />
                            <label htmlFor="subscribe-checkbox">Yes, subscribe me to your newsletter. *</label>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <p>©2035 by Madagascar. Powered and secured by <a href="https://www.wix.com" target="_blank" rel="noopener noreferrer">Wix</a></p>
            </div>
        </footer>
    );
};

export default Footer;
