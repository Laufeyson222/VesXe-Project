// src/components/Banner.js
import React, { useState } from 'react';

const Banner = () => {
  const [oneWay, setOneWay] = useState(true);
  const [departure, setDeparture] = useState('TP. Hồ Chí Minh');
  const [destination, setDestination] = useState('Bà Rịa - Vũng Tàu');
  const [date, setDate] = useState('2024-08-27');
  const [returnDate, setReturnDate] = useState('2024-08-28'); // State for return date
  const [tickets, setTickets] = useState(1);

  return (
    <div className="banner">
      <div className="search-box">
        <div className="trip-type">
          <label>
            <input 
              type="radio" 
              checked={oneWay} 
              onChange={() => setOneWay(true)} 
            />
            Một chiều
          </label>
          <label>
            <input 
              type="radio" 
              checked={!oneWay} 
              onChange={() => setOneWay(false)} 
            />
            Khứ hồi
          </label>
        </div>

        <div className="search-fields">
          <div className="field">
            <label>Điểm đi</label>
            <input 
              type="text" 
              value={departure} 
              onChange={(e) => setDeparture(e.target.value)} 
            />
          </div>
          <div className="field">
            <label>Điểm đến</label>
            <input 
              type="text" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
            />
          </div>
          <div className="field">
            <label>Ngày đi</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>

          {!oneWay && (
            <div className="field">
              <label>Ngày về</label>
              <input 
                type="date" 
                value={returnDate} 
                onChange={(e) => setReturnDate(e.target.value)} 
              />
            </div>
          )}

          <div className="field">
            <label>Số vé</label>
            <select 
              value={tickets} 
              onChange={(e) => setTickets(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Thêm các tùy chọn khác nếu cần */}
            </select>
          </div>
        </div>

        <div className="recent-search">
          <p>Tìm kiếm gần đây</p>
          <div className="recent-item">
            <span>{departure} - {destination}</span>
            <span>{date}</span>
            {!oneWay && <span> - {returnDate}</span>}
          </div>
        </div>

        <button className="search-button">Tìm chuyến xe</button>
      </div>
    </div>
  );
}

export default Banner;
