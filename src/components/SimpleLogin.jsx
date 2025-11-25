import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/Login.css';

const SimpleLogin = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login
    setTimeout(() => {
      const dummyUser = {
        name: 'Test User',
        email: userData.email,
        role: 'user',
        id: 'test123'
      };
      localStorage.setItem('loggedInUser', JSON.stringify(dummyUser));
      localStorage.setItem('access_token', 'dummy_token');
      toast.success('Login Successful');
      navigate('/');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Log In (Simple)</h2>

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
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="login-extra">
          Don't have an account? <Link to="/register">Register here!</Link>
        </p>
      </form>
    </div>
  );
};

export default SimpleLogin;