// AdminPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const AdminPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Admin Page</h2>
      <p>Welcome, {user ? user.email : 'Guest'}</p>
    </div>
  );
};

export default AdminPage;