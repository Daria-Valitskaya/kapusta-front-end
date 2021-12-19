import s from "./incomeExpenses.module.css";

export default function IncomeExpenses({
  income = "+45000.00",
  expenses = "-18000.00",
}) {
  return (
    <div className={s.field}>
      <div className={s.expenses_field}>
        <p className={s.title}>Расходы:</p>
        <p className={s.expenses}>{expenses} грн.</p>
      </div>
      <div className={s.income_field}>
        <p className={s.title}>Доходы:</p>
        <p className={s.income}>{income} грн.</p>
      </div>
    </div>
  );
}
