import React from "react";
import EllipsisText from "react-ellipsis-text";
import { v4 } from 'uuid';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import deleteImg from "../../images/other/delete.svg";
import s from "./Table.module.css";

const array = [
  {
    _id: "61bbb3fdff32b0f7bb9db453",
    date: "12.12.2021",
    description: "",
    category: "Транспорт",
    sum: 100,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T21:47:41.123Z",
    updatedAt: "2021-12-16T21:47:41.123Z",
  },
  {
    _id: "61bbb42fff32b0f7bb9db459",
    date: "12.12.2021",
    description: "",
    category: "Транспорт",
    sum: 100,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T21:48:31.401Z",
    updatedAt: "2021-12-16T21:48:31.401Z",
  },
  {
    _id: "61bbb430ff32b0f7bb9db45d",
    date: "12.12.2021",
    description: "",
    category: "Транспорт",
    sum: 100,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T21:48:32.897Z",
    updatedAt: "2021-12-16T21:48:32.897Z",
  },
  {
    _id: "61bbb432ff32b0f7bb9db461",
    date: "12.12.2021",
    description: "",
    category: "Транспорт",
    sum: 100,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T21:48:34.404Z",
    updatedAt: "2021-12-16T21:48:34.404Z",
  },
  {
    _id: "61bbb86d1bdd51856f7c6f60",
    date: "12.12.2021",
    description: "",
    category: "Транспорт",
    sum: 10000000,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T22:06:37.097Z",
    updatedAt: "2021-12-16T22:06:37.097Z",
  },
  {
    _id: "61bbb91d1bdd51856f7c6f64",
    date: "12.12.2021",
    description: "",
    category: "ЗП",
    sum: 100000.67,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T22:09:33.886Z",
    updatedAt: "2021-12-16T22:09:33.886Z",
  },
  {
    _id: "61bbbaad1bdd51856f7c6f6e",
    date: "12.09.2021",
    description: "",
    category: "ЗП",
    sum: 10000000.76,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-16T22:16:13.897Z",
    updatedAt: "2021-12-16T22:16:13.897Z",
  },
  {
    _id: "61bce43c471decf2df6c99ac",
    date: "12.09.2021",
    description: "buy a big good house for my wife",
    category: "ЗП",
    sum: 1000,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-17T19:25:48.550Z",
    updatedAt: "2021-12-17T19:25:48.550Z",
  },
  {
    _id: "61bcf8571141bd587fa21bc4",
    date: "12.10.2021",
    description: "",
    category: "ЗП",
    sum: 10.0,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-17T20:51:35.603Z",
    updatedAt: "2021-12-17T20:51:35.603Z",
  },
  {
    _id: "61bcf86f1141bd587fa21bca",
    date: "12.11.2021",
    description: "",
    category: "ЗП",
    sum: 1000.0,
    transactionType: "expense",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-17T20:51:59.806Z",
    updatedAt: "2021-12-17T20:51:59.806Z",
  },
  {
    _id: "61bcf8a61141bd587fa21bce",
    date: "12.12.2021",
    description: "prepare sandiches",
    category: "ЗП",
    sum: 1000.76,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-17T20:52:54.579Z",
    updatedAt: "2021-12-17T20:52:54.579Z",
  },
  {
    _id: "61bcf8ec1141bd587fa21bd6",
    date: "12.08.2021",
    description: "",
    category: "ЗП",
    sum: 1000,
    transactionType: "income",
    owner: "61bb928304b8bb486d0b0e2b",
    createdAt: "2021-12-17T20:54:04.487Z",
    updatedAt: "2021-12-17T20:54:04.487Z",
  },
];


function Table() {
  if(array.length < 9) {
    const draft = {
      date: "",
      description: "",
      category: "",
      sum: '',
      transactionType: "",
      emptyItem: true
    }
    const position = array.length;
    array.length = 9;
    array.fill(draft, position)
  }
  return (
    <SimpleBar className={s.simpleBar}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.borderLeft}>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Сумма</th>
            <th className={s.borderRight}></th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {array && array.map((item) => (
            <tr key={!item._id ? item.id = v4() : item._id} className={s.tr}>
              <td>{item.date}</td>
              <td>
                <EllipsisText text={item.description} length={30} />
              </td>
              <td>{item.category}</td>
              {item.transactionType === "income" ? (
                <td className={s.incomeTrsn}>{item.sum && `+ ${item.sum.toFixed(2)}`}</td>
              ) : (
                <td className={s.expenseTrsn}>{item.sum && `- ${item.sum.toFixed(2)}`}</td>
              )}
              <td>
                {!item.emptyItem &&
                  <button className={s.deleteBtn}>
                    <img
                      src={deleteImg}
                      alt="delete bucket"
                      className={s.deleteImg}
                    />
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SimpleBar>
  );
}

export default Table;
