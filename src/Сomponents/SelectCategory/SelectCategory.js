import React from "react";
import s from "./SelectCategory.module.css";

export default function SelectCategory({ categories, category, onChange }) {
  return (
    <div>
      <select
        name="category"
        value={category}
        className={s.select}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled>Категория товара</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
