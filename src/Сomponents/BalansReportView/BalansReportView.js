import { Link } from "react-router-dom";
import s from "./BalansReportView.module.css";
import keyboard_backspace from "../../images/other/keyboard_backspace.svg";
import SliderMonth from "../SliderMonth/SliderMonth";

export default function BalansReportView() {
  return (
    <div className={s.backToHomeField}>
      <Link to="/homeview">
        <div className={s.linkfield}>
          <svg
            className={s.keyboard_backspace}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2Z" />
          </svg>
          <span className={s.linkText}>Вернуться на главную</span>
        </div>
      </Link>

      <div className={s.fieldSlider}>
        <p className={s.sliderTitle}>Текущий период:</p>
        <SliderMonth />
      </div>
      <div className={s.balansFieldText}>
        <p className={s.titleBalans}>Баланс:</p>
        <p className={s.balansTextNumber}>55000.00</p>
      </div>
    </div>
  );
}
