import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    if (!user.email) {
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }
    return children;
};

export default PrivateRoute;