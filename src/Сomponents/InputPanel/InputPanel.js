import React, { useState, useEffect } from "react";

import categoriesExpense from "../../data/categoryConsumption.json";
import SelectCategory from "../SelectCategory/SelectCategory";

import s from "./InputPanel.module.css";
import sum from "../../images/other/calculator.svg";

export default function InputPanel() {
  return (
    <div>
      <form className={s.formPanel} id="formPanel">
        <input
          className={s.description}
          type="text"
          name="description"
          placeholder="Описание товара"
        />

        <SelectCategory categoriesExpense={categoriesExpense} />

        <div className={s.wrapperSum}>
          <input
            className={s.sum}
            // type="number"
            // value=""
            name="sum"
            placeholder="0.00"
          />
          <button type="button" className={s.sumButton}>
            <img src={sum} alt="sum" />
          </button>
        </div>
      </form>
    </div>
  );
}
