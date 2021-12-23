import React, { useState } from "react";

import SelectCategory from "../SelectCategory/SelectCategory";
import { StandartBtn } from "../Buttons";

import s from "./InputPanel.module.css";
import sumImg from "../../images/other/calculator.svg";

export default function InputPanel({ onSubmit, categories }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Категория товара");

  return (
    <>
      <form className={s.formPanel} id="formPanel">
        <input
          className={s.description}
          type="text"
          name="description"
          placeholder="Описание товара"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <SelectCategory
          categories={categories}
          category={category}
          onChange={setCategory}
        />

        <div className={s.wrapperSum}>
          <input
            className={s.sum}
            // type="number"
            name="sum"
            placeholder="0.00"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <button type="button" className={s.sumButton}>
            <img src={sumImg} alt="sum" />
          </button>
        </div>
      </form>
      <div className={s.buttonWrapper}>
        <StandartBtn
          onClick={() => {
            onSubmit({
              description,
              category,
              sum: amount,
            });
          }}
        >
          ввод
        </StandartBtn>
        <StandartBtn>очистить</StandartBtn>
      </div>
    </>
  );
}
