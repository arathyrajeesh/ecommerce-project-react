import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import '../styles/Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer'
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (data) => {
        await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/register', data)
            .then(res => {
                const userId = res.data.data.id;
                localStorage.setItem('access_token', res.data.token);
                localStorage.setItem('user_id', userId);
                localStorage.setItem(`cart_${userId}`, JSON.stringify([]));

                toast.success('Registration Successful');
                navigate('/');
            })
            .catch(err => {
                toast.error(err.response?.data?.message || 'Registration failed');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        handleRegister(userData);
    };

    return (
        <div className="auth-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={userData.name}
                    placeholder='Enter your Name' 
                    onChange={handleInputChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={userData.email} 
                    placeholder='Enter your email'
                    onChange={handleInputChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type={showPassword ? 'text' : 'password'} 
                    name="password" 
                    value={userData.password} 
                    placeholder="Enter your password"
                    onChange={handleInputChange} 
                    />
                    <button
                    type="button"
                    className="show-password-button"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button type="submit" className="auth-button" disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
                </button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </div>
    );
};

export default Register;
