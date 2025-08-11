import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login',
                userData
            );

            // Check the API response structure here
            // If the token is directly in res.data, use res.data.token
            // If it's nested like the user data, it might be res.data.data.token
            const token = res.data.token; 

            if (token) {
                // Save the token to localStorage
                localStorage.setItem('access_token', token);
                toast.success('Login Successful');
                navigate('/');
            } else {
                // If the token is not in the expected location
                toast.error('Authentication token not received. Please try again.');
            }

        } catch (error) {
            console.error(error, 'error');
            const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name='password'
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
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <button type="submit" className="auth-button" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                </button>
                
                <p className="auth-link-text">
                    <Link to="/reset-password">Forgot password?</Link>
                </p>
                <p className="auth-link-text">
                    Don't have an account? <Link to="/register">Register here!</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;