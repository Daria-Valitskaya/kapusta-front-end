import { useDispatch, useSelector } from 'react-redux';
import { transactionsSelectors, transactionsOperations } from '../../redux/transactions';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from '../../Сomponents/ModalWindows/Modal'
import calendarImg from '../../images/other/calendar.svg';
import s from './CalendarBar.module.css';


const CalendarBar = () => {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const date = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();

  const toggleCalendar = () => {
      setShowCalendar(prevState => !prevState)
  }

  const pad = (value) => {
    return String(value).padStart(2, '0');
  };

  // const fullDate = `${pad(date)}.${pad(month)}.${year}`;

  const closeAndDispatch = () => {
    // dispatch(transactionsOperations.getSummary('expense', '01.12.2021'));
    // dispatch(transactionsOperations.getSummary('income', '01.12.2021'));
    toggleCalendar();
  }

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
      
        {showCalendar && 
          <Modal onClose={closeAndDispatch}>
            <Calendar
              className={s.calendar}
              onChange={onChange}
              value={value}
            />
          </Modal>
        }
      
    </div>
  );
}

export default CalendarBar;