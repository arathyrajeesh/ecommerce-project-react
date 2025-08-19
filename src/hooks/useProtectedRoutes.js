import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoutes = () => {
        const { user, loading } = useContext(AuthContext);
    
        if (loading) return <div>Loading...</div>;
        if (!user) return <Navigate to="/login" replace />; 
    
        return <Outlet />; 
    };

export default ProtectedRoutes;
