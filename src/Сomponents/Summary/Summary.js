import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import s from "./Summary.module.css";

const Summary = ({ selector }) => {
  const summary = useSelector(selector) || [];

  const summaryData = [...summary]
    .sort((a, b) => a.month - b.month)
    .map((item) => (
      <li key={item.month} className={s.listItem}>
        <span>{item.monthName}</span>
        <span>{item.sum}</span>
      </li>
    ));

  return (
    <div className={s.wrapper}>
      <h4 className={s.caption}>Сводка</h4>
      <SimpleBar style={{ height: "240px" }}>
        <ul className={s.list}>
          {summaryData.length !== 0 ? (
            summaryData
          ) : (
            <li className={s.listItem}>
              <span>No transactions this year</span>
            </li>
          )}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Summary;
