// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/dashboard';
import KKProfile from './pages/kkProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/user" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kk-profile" element={<KKProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
