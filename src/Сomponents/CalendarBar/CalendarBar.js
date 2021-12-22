import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';
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
  const fullDate = `${String(date).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
  const period = `${String(month).padStart(2, '0')}.${year}`;

  useEffect(() => {
    dispatch(transactionsOperations.getSummary({transactionType: 'expense', date: fullDate}));
    dispatch(transactionsOperations.getSummary({transactionType:'income', date: fullDate}));
    dispatch(transactionsOperations.getTransForPeriod({transactionType: 'expense', period}));
    dispatch(transactionsOperations.getTransForPeriod({transactionType: 'income', period}));
  }, [dispatch, fullDate, period])

  const toggleCalendar = () => {
      setShowCalendar(prevState => !prevState)
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
          {fullDate}
        </span>
      </button> 
      
        {showCalendar && 
          <Modal onClose={toggleCalendar}>
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