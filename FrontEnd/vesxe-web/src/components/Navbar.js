import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png'; // Import logo từ thư mục assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import icon người dùng từ Font Awesome

const Navbar = () => {
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
            <Link to="/login">Đăng nhập/Đăng ký</Link>
            
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
