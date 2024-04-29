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
import LoginForm1 from "./component/LoginForm1";
import HomePage from "./component/HomePage";

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
          <Route path="/login" element={<LoginForm1 />} />
          <Route path="/dashboard" element={<ProtectedRoute />} />
          <Route path="/admin" element={<AdminRoute />} />
        </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
};

export default App;
