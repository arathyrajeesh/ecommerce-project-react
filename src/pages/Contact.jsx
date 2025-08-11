import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page-container">
            <h2 className="contact-heading">CONTACT</h2>
            <div className="contact-content-wrapper">
                <div className="contact-info-column">
                    <div className="contact-info-section">
                        <h4>VISIT US</h4>
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>info@my-domain.com</p>
                        <p>Tel: 123-456-7890</p>
                        <a href="#">View Map</a>
                    </div>

                    <div className="contact-info-section">
                        <h4>Our Store</h4>
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>info@my-domain.com</p>
                        <p>Tel: 123-456-7890</p>
                        <a href="#">View Map</a>
                    </div>

                    <div className="contact-info-section">
                        <h4>Opening Hours</h4>
                        <p>Mon - Fri: 7am - 10pm</p>
                        <p>Saturday: 8am - 10pm</p>
                        <p>Sunday: 8am - 11pm</p>
                    </div>

                    <div className="contact-info-section">
                        <h4>Customer Service</h4>
                        <p>info@my-domain.com</p>
                        <p>Tel: 123-456-7890</p>
                    </div>
                </div>

                <div className="contact-form-column">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <div className="phone-input">
                                    <select>
                                        <option value="+44">+91 (IN)</option>
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+44">+93 (AF)</option>
                                        <option value="+44">+54 (ARG)</option>
                                        <option value="+44">+55 (BR)</option>
                                        <option value="+44">+92 (PAK)</option>
                                        <option value="+44">+20 (EG)</option>                                        <option value="+44">+20 (EG)</option>
                                        <option value="+44">+81 (JP)</option>
                                        <option value="+44">+57 (CO)</option>
                                    </select>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group full-width">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
