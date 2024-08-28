// src/components/PopularRoutes.js
import React from 'react';

const PopularRoutes = () => {
  return (
    <div className="popular-routes">
      <h2>Tuyến đường phổ biến</h2>
      <ul>
        <li><a href="/">Hà Nội - Hải Phòng</a></li>
        <li><a href="/">TP.HCM - Đà Lạt</a></li>
        <li><a href="/">Đà Nẵng - Hội An</a></li>
        {/* Thêm các tuyến đường khác tại đây */}
      </ul>
    </div>
  );
}

export default PopularRoutes;
