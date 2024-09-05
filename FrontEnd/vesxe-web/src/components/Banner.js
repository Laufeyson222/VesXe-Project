// src/components/Banner.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/style.css';
const Banner = () => {
  const [oneWay, setOneWay] = useState(true);
  const [departure, setDeparture] = useState('TP. Hồ Chí Minh');
  const [destination, setDestination] = useState('Bà Rịa - Vũng Tàu');
  const [date, setDate] = useState(new Date('2024-09-5'));
  const [returnDate, setReturnDate] = useState(new Date('2024-09-8'));
  const [tickets, setTickets] = useState(1);

  // Create a date object for the current date
  const today = new Date();

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
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={today}  
              className="date-picker"
            />
          </div>

          {!oneWay && (
            <div className="field">
              <label>Ngày về</label>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={today}  
                className="date-picker"
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
              {/* Add more options if needed */}
            </select>
          </div>
        </div>

        <div className="recent-search">
          <p>Tìm kiếm gần đây</p>
          <div className="recent-item">
            <span>{departure} - {destination}</span>
            <span>{date.toLocaleDateString()}</span>
            {!oneWay && <span> - {returnDate.toLocaleDateString()}</span>}
          </div>
        </div>

        <button className="search-button">Tìm chuyến xe</button>
      </div>
    </div>
  );
}
export default Banner;
