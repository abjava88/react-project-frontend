import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 2px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 2px;
  text-align: left;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const LoginForm1 = () => {
  const navigate = useNavigate();
  const { login, errors, user, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(`LoginForm1 user ${JSON.stringify(user)}`);
  useEffect(() => {
    if(isAuthenticated()) navigate('/');
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2>Login</h2>
        {errors && errors.message && <p style={{ color: "red", textAlign: "left" }}>{errors.message}</p>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors && errors.email && <Error>{errors.email}</Error>}
          <br />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors && errors.password && <Error>{errors.password}</Error>}
          <br />
          <Button type="submit">Login</Button>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default LoginForm1;
