import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                
                if (!accessToken) {
                    setError('Authentication token not found.');
                    setLoading(false);
                    toast.error('Please log in to view your profile.');
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
    }, []); 
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
            <h2>User Profile</h2>
            <p>Name: <strong>{user.name}</strong></p>
            <p>Email: <strong>{user.email}</strong></p>
        </div>
    );
}

export default UserProfile;