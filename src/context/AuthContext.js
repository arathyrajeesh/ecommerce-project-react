import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const accessToken = localStorage.getItem('access_token');
            if (!accessToken) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/me',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                setUser(response.data.data);
                toast.success('Details fetched successfully!');
            } catch (err) {
                console.error("Error fetching user profile:", err);
                localStorage.removeItem('access_token');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const login = (token) => {
        localStorage.setItem('access_token', token);
        // You might fetch the user data here after login
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setUser(null);
        toast.success('Logged out successfully!');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;