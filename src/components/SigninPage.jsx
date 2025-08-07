import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signin.css'

const SignInPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign-up attempt with:', { name, email, password });
        alert('Sign-up functionality is not yet implemented.');
    };

    return (
        <div className="auth-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Sign Up</button>
                <p className="auth-link-text">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </form>
        </div>
    );
};

export default SignInPage;
