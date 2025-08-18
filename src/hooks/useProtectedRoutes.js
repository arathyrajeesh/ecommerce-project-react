import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('access_token');

    if (token) {
        return <Outlet />;
    }
    return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;