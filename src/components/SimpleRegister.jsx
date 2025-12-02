import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthContext from '../context/AuthContext';
import '../styles/Register.css';

const SimpleRegister = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate register
    setTimeout(() => {
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const userExists = existingUsers.find(user => user.email === userData.email);

      if (userExists) {
        toast.error('User already exists with this email');
        setLoading(false);
        return;
      }

      const newUser = {
        name: userData.name,
        email: userData.email,
        password: userData.password, // In real app, this should be hashed
        role: 'user',
        id: Date.now().toString()
      };

      // Store user
      existingUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

      // Login the user
      const userForLogin = {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        id: newUser.id
      };

      login(userForLogin);
      toast.success('Registration Successful');
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
      </form>
    </div>
  );
};

export default SimpleRegister;