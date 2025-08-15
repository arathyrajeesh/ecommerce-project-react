import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page-container">
            <h1 className="contact-title">Get in Touch</h1>
            <div className="contact-grid">
                <div className="contact-info-section">
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div className="info-text">
                            <h3>Address</h3>
                            <p>500 Terry Francois Street</p>
                            <p>San Francisco, CA 94158</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <div className="info-text">
                            <h3>Phone</h3>
                            <p>Tel: +1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <div className="info-text">
                            <h3>Email</h3>
                            <p>info@my-domain.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaClock className="info-icon" />
                        <div className="info-text">
                            <h3>Opening Hours</h3>
                            <p>Mon - Fri: 7am - 10pm</p>
                            <p>Saturday: 8am - 10pm</p>
                            <p>Sunday: 8am - 11pm</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2 className="form-title">Send us a message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5"></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;