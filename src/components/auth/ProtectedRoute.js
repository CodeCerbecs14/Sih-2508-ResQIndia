import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, isAdmin, isStudent } = useApp();
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If role is specified, check if user has the required role
  if (requiredRole) {
    if (requiredRole === 'admin' && !isAdmin()) {
      // Admin trying to access student area - redirect to admin dashboard
      if (isStudent()) {
        return <Navigate to="/admin/dashboard" replace />;
      }
      // Unauthorized access
      return <Navigate to="/login" replace />;
    }
    
    if (requiredRole === 'student' && !isStudent()) {
      // Student trying to access admin area - redirect to student dashboard
      if (isAdmin()) {
        return <Navigate to="/student/dashboard" replace />;
      }
      // Unauthorized access
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;

