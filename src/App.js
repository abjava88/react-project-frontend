// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./component/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import AdminRoute from "./component/AdminRoute";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import LoginForm from "./component/LoginForm";

const AppContainer = styled.div`
  text-align: center;
`;
const App = () => {
  return (
    <AuthProvider>
      <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<ProtectedRoute />} />
          <Route path="/admin" element={<AdminRoute />} />
        </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
};

export default App;
