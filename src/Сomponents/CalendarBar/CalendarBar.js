import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendarImg from '../../images/other/calendar.svg';
import s from './CalendarBar.module.css';

const CalendarBar = () => {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
//   console.log(value.getDate());
//   console.log(value.getFullYear());
//   console.log(value.getMonth());

  const date = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();

  const toggleCalendar = () => {
      setShowCalendar(prevState => !prevState)
  }

  const pad = (value) => {
    return String(value).padStart(2, '0');
  };

  return (
    <div className={s.wrapper}>
      <button 
        onClick={toggleCalendar} 
        className={s.button}
      >
        <img 
          src={calendarImg} 
          alt="calendar" 
          className={s.calendarImg}
        />
        <span className={s.calendarText}>
          {pad(date)}.{pad(month)}.{year}
        </span>
      </button> 
            
      {showCalendar && <Calendar
        className={s.calendar}
        onChange={onChange}
        value={value}
      />}
    </div>
  );
}

export default CalendarBar;