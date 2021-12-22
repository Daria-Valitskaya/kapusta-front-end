
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';
import BalansForm from "../../Сomponents/BalansForm/BalansForm";
import ContainerTabs from "../../Сomponents/ContainerTabs";
import MobileTabs from "../../Сomponents/MobileTabs";
import CalendarBar from "../../Сomponents/CalendarBar";
import s from "./HomeViews.module.css";

export default function HomeViews() {
  const dispatch = useDispatch();

  const value = new Date();

  const date = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const fullDate = `${String(date).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
  const period = `${String(month).padStart(2, '0')}.${year}`;

  useEffect(() => {
    dispatch(transactionsOperations.getSummary({transactionType: 'expense', date: fullDate}));
    dispatch(transactionsOperations.getSummary({transactionType:'income', date: fullDate}));
    dispatch(transactionsOperations.getTransForPeriod({transactionType: 'expense', period}));
    dispatch(transactionsOperations.getTransForPeriod({transactionType: 'income', period}));
  }, [dispatch, fullDate, period])
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   window.addEventListener('resize', updateWindowDimensions);
  //   return () => {
  //     window.removeEventListener('resize', updateWindowDimensions);
  //   }
  // })

  // const updateWindowDimensions = () => {
  //   setWidth(window.innerWidth);
  // }

  return (
    <div className={s.background}>
      <div className={s.wrapper}>
        <BalansForm />
        {/* {width <= 767 &&
        <CalendarBar />
      } */}

        <MobileTabs />
        <ContainerTabs />
      </div>
    </div>
  );
}
