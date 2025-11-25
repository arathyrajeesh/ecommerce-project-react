import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/Register.css';

const SimpleRegister = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate register
    setTimeout(() => {
      const dummyUser = {
        name: userData.name,
        email: userData.email,
        role: 'user',
        id: 'test123'
      };
      localStorage.setItem('loggedInUser', JSON.stringify(dummyUser));
      localStorage.setItem('access_token', 'dummy_token');
      toast.success('Registration Successful');
      navigate('/');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register (Simple)</h2>

        <div className="register-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="register-group">
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

        <div className="register-group">
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

        <button type="submit" className="register-button" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="register-footer">
          Already have an account? <Link to="/login">Log in here!</Link>
        </p>
        <p className="register-footer">
          <Link to="/">Go to Home Page</Link>
        </p>
      </form>
    </div>
  );
};

export default SimpleRegister;