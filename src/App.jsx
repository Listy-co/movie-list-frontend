// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegisterPage';
import AddMovie from './components/AddMovie';
import DeleteMovie from './components/DeleteMovie';
import EditMovie from './components/EditMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/DeleteMovie" element={<DeleteMovie />} />
        <Route path="/EditMovie" element={<EditMovie />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


