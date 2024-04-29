// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import DashboardPage from "./DashboardPage";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? <DashboardPage /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
