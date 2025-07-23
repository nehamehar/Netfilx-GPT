import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import our custom auth hook

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If there is no user, redirect to the login page ('/')
  if (!user) {
    return <Navigate to="/" replace />;
    // 'replace' avoids adding the browse page to the history stack
  }

  // If there is a user, render the children components (the protected page)
  return children;
};

export default ProtectedRoute;