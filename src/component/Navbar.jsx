import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "./AuthContext";

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center; /* Center the navigation links */
  flex-grow: 1; /* Allow the navigation links to grow and take up the remaining space */
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
`;


const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
`;

const LogoutSpan = styled.span`
`
const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  return (
    <Nav>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {isAdmin() && <NavLink to="/admin">Admin</NavLink>}
      </NavLinks>
      
      <NavbarIcons>
          {isAuthenticated() ? (
            <LogoutButton onClick={logout}>
              <LogoutSpan>Logout</LogoutSpan> {/* Assuming you're using Font Awesome for icons */}
            </LogoutButton>
          ) : (
            <LoginLink to="/login">Login</LoginLink>
          )}
        </NavbarIcons>
    </Nav>
  );
};

export default Navbar;
