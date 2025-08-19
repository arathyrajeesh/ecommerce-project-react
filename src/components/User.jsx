import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/UserProfile.css';
import AuthContext from '../context/AuthContext';

function UserProfile() {
    const { user, loading, logout } = useContext(AuthContext);

    if (loading) {
        return <div className="loading-message">Loading user data...</div>;
    }

    if (!user) {
        return <div className="no-data-message">No user data available.</div>;
    }

    return (
        <div className="user-profile-container">
            <div className="profile-card">
                <FaUserCircle size={80} color="Black" />
                <h2>Profile</h2>
                <p>Name: <strong>{user.name}</strong></p>
                <p>Email: <strong>{user.email}</strong></p>
                <button className="logout-button" onClick={logout}>Log Out</button>
            </div>
        </div>
    );
}

export default UserProfile;