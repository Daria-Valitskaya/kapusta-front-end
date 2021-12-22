import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import SliderMonth from "../SliderMonth/SliderMonth";
import s from "./BalansReportView.module.css";

export default function BalansReportView() {
  const stateBalance = useSelector(authSelectors.getBalance);
  useEffect(() => {});

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
        <p className={s.balansTextNumber}>{stateBalance} UAH</p>
        <p className={s.balansTextConfirm}>ПОДТВЕРДИТЬ</p>
      </div>
    </div>
  );
}
