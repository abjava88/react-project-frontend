// ProtectedPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();
  console.log(`user ${JSON.stringify(user)}`);

  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>Welcome, {user ? user.email : 'Guest'}</p>
    </div>
  );
};

export default DashboardPage;