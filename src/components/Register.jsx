
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../pages/RegisterPage';
import './App.css';

const Registration = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<RegistrationPage />} 
      />
    </Routes>
  );
};

export default Registration;


