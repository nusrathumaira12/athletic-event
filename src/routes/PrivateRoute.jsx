import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(!user){
       return <Navigate to="/logIn" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;