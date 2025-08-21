import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Spinner from "../components/Spinner";

const ProtectedRoutes = () => {
        const { user, loading } = useContext(AuthContext);
    
        if (loading) return    <Spinner/>   

        if (!user) return <Navigate to="/login" replace />; 
    
        return <Outlet />; 
    };

export default ProtectedRoutes;
