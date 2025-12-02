import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import AuthContext from '../context/AuthContext';   
import '../styles/Login.css';

const LoginPage = () => {
const [userData, setUserData] = useState({ email: '', password: '' });
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const navigate = useNavigate();

const { login } = useContext(AuthContext); 

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
    const user = res.data.data; 

    if (token && user) {
        localStorage.setItem('access_token', token);

        login(user);

        if (!localStorage.getItem(`cart_${user.id}`)) {
        localStorage.setItem(`cart_${user.id}`, JSON.stringify([]));
        }

        toast.success('Login Successful');
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
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Log In</h2>

        <div className="login-group">
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

        <div className="login-group">
        <label>Password</label>
        <div className="login-password-container">
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
            className="login-show-password"
            onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
        </div>

        <div className="login-group">
        <label>
            <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
        </label>
        </div>

        <button type="submit" className="login-button" disabled={loading}>
        {loading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="login-extra">
        <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <p className="login-extra">
        Don't have an account? <Link to="/register">Register here!</Link>
        </p>
    </form>
    </div>
);
};

export default LoginPage;
