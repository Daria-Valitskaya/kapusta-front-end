import React from "react";
import s from "./SelectCategory.module.css";

export default function SelectCategory({ categoriesExpense }) {
  return (
    <div>
      <select
        name="category"
        defaultValue="Категория товара"
        className={s.select}
      >
        <option disabled>Категория товара</option>
        {categoriesExpense.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
