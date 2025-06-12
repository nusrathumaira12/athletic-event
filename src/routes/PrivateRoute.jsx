import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(!user){
       return <Navigate to="/logIn" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;