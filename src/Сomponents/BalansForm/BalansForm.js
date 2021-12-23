import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authOperations, authSelectors } from "../../redux/auth";
import ConfirmBtn from "../Buttons/ConfirmBtn/ConfirmBtn.js";
import BlackModal from "../ModalWindows/BlackModal/BlackModal.js";
import s from "./balansForm.module.css";

export default function BalansForm() {
  const [balance, setBalance] = useState("");
  const isBalanceEmpty = balance === "";

  const stateBalance = useSelector(authSelectors.getBalance);
  const dispatch = useDispatch();

  const uan = "UAH";
  const notHoverBtnConfirm = isBalanceEmpty ? "" : s.offBtn;
  const notHoverInputOfBalance = isBalanceEmpty ? "" : s.offInput;

  // при положительном балансе выводит его и блокирует форму:
  useEffect(() => {
    if (stateBalance > 0 && stateBalance !== balance) {
      setBalance(stateBalance);
    }
  }, [balance, stateBalance]);
  /*
   * Отвечает за обновление состояния
   */
  const handleChange = (e) => {
    function isNumeric(value) {
      return /[a-zA-Z]+/g.test(value);
    }
    if (isNumeric(e.target.value)) {
      return;
    }
    setBalance(e.target.value);
  };

  /*
   * Вызывается при отправке формы
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    const inputValue = parseFloat(balance).toFixed(2);
    if (isNaN(inputValue)) {
      return;
    }
    console.log(`Отправляем баланс: ${inputValue}`);
    setBalance(inputValue);
    //отправляем баланс на бэк:
    dispatch(authOperations.balanceInit({ balance: inputValue }));
  }

  return (
    <div className={s.field}>
      <form className={s.form} onSubmit={handleSubmit}>
        <span className={s.labelText}> Баланс:</span>
        <label className={s.label}>
          <div className={s.inputWrapper}>
            <input
              type="text"
              disabled={!isBalanceEmpty}
              className={s.inputField + " " + notHoverInputOfBalance}
              minLength={1}
              placeholder="00.00"
              value={balance}
              onChange={handleChange}
            />
            <span className={s.uan}>{uan}</span>
            {/* {uan} */}
          </div>
        </label>
        <ConfirmBtn
          className={s.btn + " " + notHoverBtnConfirm}
          btnOff={!isBalanceEmpty}
        />
      </form>
      <Link
        className={s.link}
        to={{
          pathname: "/reportview",
          state: { from: "/homeview" },
        }}
      >
        <div className={s.linkfield}>
          <span className={s.linkText}>Перейти к отчетам</span>
          <svg
            className={s.charts}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
          </svg>
        </div>
      </Link>
      <div className={isBalanceEmpty ? s.modalPosition : s.modalPositionNone}>
        <BlackModal />
      </div>
    </div>
  );
}
