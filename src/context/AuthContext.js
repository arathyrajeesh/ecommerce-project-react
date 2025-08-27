import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        setUser(userData);

        if (userData.role === "admin") {
        navigate("/admin/dashboard");
        } else {
        navigate("/home");
        }
    };

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        navigate("/admin/login");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
