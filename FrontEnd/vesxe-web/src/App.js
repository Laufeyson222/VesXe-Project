// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestHomePage from './pages/GuestHomePage';
import AdminDashboard from './admin/AdminDashboard';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GuestHomePage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/admin/login" element={<AdminLoginPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
