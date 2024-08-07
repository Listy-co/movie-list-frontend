
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import loginUser from '../../services/loginUser'; // Adjust the path as necessary
import './App.css';

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage loginUser={loginUser} />} />
    </Routes>
  );
};

export default Login;

