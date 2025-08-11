import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import '../styles/UserProfile.css'; 

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                
                if (!accessToken) {
                    setError('Authentication token not found.');
                    setLoading(false);
                    toast.error('Please log in to view your profile.');
                    // Redirect to login if no token is found
                    navigate('/login');
                    return;
                }

                const response = await axios.get(
                    'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/me',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                console.log("Users Details:", response.data);
                setUser(response.data.data); 
                toast.success('Details fetched successfully!');
            } catch (err) {
                const msg = err.response?.data?.message || 'Failed to fetch user profile. Please try again later.';
                setError(msg);
                toast.error(msg);
                console.error("Error fetching user profile:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]); // Added navigate to the dependency array

    // Handler function for logging out
    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('access_token');
        // Show a success message
        toast.success('Logged out successfully!');
        // Redirect the user to the login page
        navigate('/login'); 
    };

    if (loading) {
        return <div className="loading-message">Loading user data...</div>;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    if (!user) {
        return <div className="no-data-message">No user data available.</div>;
    }

    return (
        <div className="user-profile-container">
            <div className="profile-card">
                <FaUserCircle size={80} color="#007bff" />
                <h2>User Profile</h2>
                <p>Name: <strong>{user.name}</strong></p>
                <p>Email: <strong>{user.email}</strong></p>
                <button className="logout-button" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
}

export default UserProfile;