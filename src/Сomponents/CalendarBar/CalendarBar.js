import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "../../Сomponents/ModalWindows/Modal";
import calendarImg from "../../images/other/calendar.svg";
import s from "./CalendarBar.module.css";

const CalendarBar = ({ value, onChange, fullDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  return (
    <div className={s.wrapper}>
      <button onClick={toggleCalendar} className={s.button}>
        <img src={calendarImg} alt="calendar" className={s.calendarImg} />
        <span className={s.calendarText}>{fullDate}</span>
      </button>

      {showCalendar && (
        <Modal onClose={toggleCalendar}>
          <Calendar className={s.calendar} onChange={onChange} value={value} />
        </Modal>
      )}
    </div>
  );
};

export default CalendarBar;
