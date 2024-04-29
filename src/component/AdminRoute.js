// AdminRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AdminPage from "./AdminPage";

const AdminRoute = () => {
  const { isAdmin } = useAuth();
  return isAdmin() ? <AdminPage /> : <Navigate to="/login" />;
};

export default AdminRoute;
