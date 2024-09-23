import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png'; // Import logo từ thư mục assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import icon người dùng từ Font Awesome

const Navbar = () => {
  // State để lưu trạng thái đăng nhập và thông tin người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Lưu thông tin người dùng

  // Kiểm tra trạng thái đăng nhập khi component được mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      const userInfo = JSON.parse(localStorage.getItem('user')); // Lấy thông tin người dùng từ localStorage
      setUser(userInfo);
    }
  }, []);

  const handleLogout = () => {
    // Xóa trạng thái đăng nhập và thông tin người dùng
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null); // Xóa thông tin người dùng khỏi state
    // Thêm điều hướng tới trang đăng nhập hoặc trang chính nếu cần
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo Hệ Thống Đặt Vé Xe" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/search">Tìm kiếm vé</Link></li>
        <li><Link to="/schedule">Lịch Trình</Link></li>
        <li><Link to="/invoices">Hóa Đơn</Link></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            <FontAwesomeIcon icon={faUser} /> {/* Icon người dùng */}
          </a>
          <div className="dropdown-content">
            {isLoggedIn ? (
              <>
                {/* Hiển thị tên người dùng trong dropdown */}
                <span style={{color:"black"}} className="user-name">Xin chào, {user.ten || user.email}</span> {/* Tên hoặc email */}
                <Link to="/profile">Thông tin cá nhân</Link> 
                <a href="#" onClick={handleLogout}>Đăng xuất</a>
              </>
            ) : (
              <Link to="/login">Đăng nhập/Đăng ký</Link>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
