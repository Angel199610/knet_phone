// src/server/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../server/authService';

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  return token ? children : <Navigate to="/Adminlogin" />;
};

export default ProtectedRoute; // Make sure to export the component as default
