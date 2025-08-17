import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import '../styles/Login.css';

const LoginPage = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        const res = await axios.post(
            'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login',
            userData
        );

        const token = res.data.token;
        const userId = res.data.data.id;

        if (token && userId) {
            localStorage.setItem('access_token', token);
            localStorage.setItem('user_id', userId);

            if (!localStorage.getItem(`cart_${userId}`)) {
            localStorage.setItem(`cart_${userId}`, JSON.stringify([]));
            }

            toast.success('Login Successful');
            navigate('/');
        } else {
            toast.error('Authentication failed. Please try again.');
        }
        } catch (error) {
        const errorMessage =
            error.response?.data?.message ||
            'Login failed. Please check your credentials.';
        toast.error(errorMessage);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Log In</h2>

            <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
            />
            </div>

            <div className="form-group">
            <label>Password</label>
            <div className="password-input-container">
                <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                />
                <button
                type="button"
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
            </button>

            <p>
            <Link to="/forgot-password">Forgot password?</Link>
            </p>
            <p>
            Don't have an account? <Link to="/register">Register here!</Link>
            </p>
        </form>
        </div>
    );
};

export default LoginPage;
