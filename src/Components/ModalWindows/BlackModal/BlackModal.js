import s from "./blackModal.module.css";

export default function BlackModal() {
  return (
    <div className={s.field}>
      <p className={s.textLarge}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.textSmall}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
}
