// AdminPage.js
import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const AdminPage = () => {
  const { user, errors, getAdminData} = useAuth();
  const [data, setData] = useState('');

  useEffect(() => {
    const response = getAdminData();
    setData(response.data);
  }, []);

  if(errors && errors.message) return (<p style={{ color: "red", textAlign: "left" }}>{errors.message}</p>);
  return (
    <div>
      <h2>Admin Page</h2>
      <p>Welcome, {user ? user.email : 'Guest'}</p>
      <p>Dashboard data {data}</p>
    </div>
  );
};

export default AdminPage;