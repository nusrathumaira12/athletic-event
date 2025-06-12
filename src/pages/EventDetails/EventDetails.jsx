import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const EventDetails = () => {
    const event = useLoaderData()
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
  
    if (!user) {
      return <Navigate to="/logIn" state={{from: location}}  replace />;
    }

    console.log(event)
    return (
        <div>
            hello
        </div>
    );
};

export default EventDetails;