import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = () => {
  const {isAuthenticate,user}=useAuth0()
  const isUser= isAuthenticate && user

  return isUser ? <Outlet /> : <Navigate to="/login" />
};
export default PrivateRoute;
