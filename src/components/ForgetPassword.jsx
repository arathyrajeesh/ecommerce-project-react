import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../styles/Forget.css';



const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        const res = await axios.post(
            'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/forgot-password',
            { email }
        );

        toast.success(res.data.message || 'Password reset link sent to your email!');

        setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
        const errorMessage =
            error.response?.data?.message || 'Try again.';
        toast.error(errorMessage);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <p style={{ fontSize: '14px', marginBottom: '15px' }}>
            Enter your email and we'll send you a password reset link.
            </p>

            <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                required
            />
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
            </button>

            <p>
            <Link to="/login">Back to Login</Link>
            </p>
        </form>
        </div>
    );
};

export default ForgotPassword;
