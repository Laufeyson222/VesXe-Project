// src/pages/LoginPage.js
import React, { useState } from 'react';
import '../assets/LoginPage.css'; // Import CSS riêng cho trang đăng nhập
import Footer from '../components/Footer'; // Import Footer mới tạo

// Import hình ảnh
import logo from '../assets/image/logo.png';
import illustration from '../assets/image/illustration.jpg';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // State để điều khiển tab hiện tại
  const [email, setEmail] = useState(''); // State cho email
  const [password, setPassword] = useState(''); // State cho mật khẩu (chỉ cần cho form đăng nhập)

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setEmail('');
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic xử lý đăng nhập
    alert('Đang đăng nhập với email: ' + email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic xử lý đăng ký
    alert('Đang đăng ký với email: ' + email);
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="FUTA Bus Lines Logo" />
        </div>
        {/* <div className="title">
          <h1>PHƯƠNG TRANG</h1>
          <p>Cùng bạn trên mọi nẻo đường</p>
        </div> */}
      </header>

      <div className="login-container">
        <div className="login-illustration">
          <img src={illustration} alt="Illustration" />
        </div>
        <div className="login-form">
          <div className="form-header">
            <button 
              className={`tab-button ${activeTab === 'login' ? 'active' : ''}`} 
              onClick={() => handleTabChange('login')}
            >
              Đăng nhập
            </button>
            <button 
              className={`tab-button ${activeTab === 'register' ? 'active' : ''}`} 
              onClick={() => handleTabChange('register')}
            >
              Đăng ký
            </button>
          </div>
          {activeTab === 'login' && (
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="email">Nhập email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Nhập email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Mật khẩu</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="*******" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">Đăng nhập</button>
              <div className="forgot-password">
                <a href="#">Quên mật khẩu</a>
              </div>
            </form>
          )}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister}>
              <div className="input-group">
                <label htmlFor="register-email">Nhập email</label>
                <input 
                  type="email" 
                  id="register-email" 
                  placeholder="Nhập email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">Đăng ký</button>
            </form>
          )}
        </div>
      </div>

      {/* Thêm Footer vào đây */}
      <Footer />
    </div>
  );
};

export default LoginPage;
