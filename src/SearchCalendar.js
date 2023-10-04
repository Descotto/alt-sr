import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import './Calendar.css'; // Import your custom styles here

function SearchCalendar() {
  const [date, setDate] = useState(new Date());

  // Function to handle day click
  const handleClick = (clickedDate) => {
    setDate(clickedDate);
    console.log(`Clicked on ${clickedDate.toDateString()}`);
  };

  // Function to customize the calendar tile (each date)
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      return (
        <button className="date-button" onClick={() => handleClick(date)}>
          {/* Empty content */}
        </button>
      );
    }
    return null;
  };

  return (
    <div className="app">
      <h1 className="header">Search By Date</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={tileContent}
          view="month" // Show a monthly view
        />
      </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
    </div>
  );
}

export default SearchCalendar;
