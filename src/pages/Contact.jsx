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
                                        <option>+91</option>
                                        <option>+34</option>
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
            <div className="map-container">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019299383516!2d-122.38769598468054!3d37.77063977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e28b0c7e8a7%3A0x9c7c8a3a6a74b0!2s500%20Terry%20Francois%20St%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2sus!4v1620836321934!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
