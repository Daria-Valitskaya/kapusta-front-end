import React, { useEffect, lazy } from "react";

import {
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import sprite from "../../images/other/sprite_categories.svg";
import IncomeExpenses from "../../Сomponents/IncomeExpenses/IncomeExpenses";
import BalansReportView from "../../Сomponents/BalansReportView/BalansReportView";
import MobileTabs from "../../Сomponents/MobileTabs";
import { setCurrentLocation } from "../../redux/screenWidth/screenWidth.action";
import css from "./ReportView.module.css";
import { useDispatch } from "react-redux";


import ReportExpense from "../../Сomponents/reportExpense/ReportExpense";


const ReportView = () => {

  const match = useRouteMatch();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentLocation(location));
  }, []);

  const activeLocation = location.pathname;

  return (
    <div>
      <div>
      <BalansReportView />
      <IncomeExpenses />
      <MobileTabs />
    </div>

      
    <div className={css.list_wraper}>
        <ul className={css.list}>
          <li className={css.item}>
            <Link to={`${match.url}`}>
              <svg width="10" height="15">
                <use xlinkHref={`${sprite}#icon-arrow-left`} />
              </svg>
            </Link>
          </li>
          <li className={css.item}>
            {activeLocation === "/reportview" ? (
              <h3 className={css.title}>Расходы</h3>
            ) : (
              <h3 className={css.title}>Доходы</h3>
            )}
          </li>
          <li className={css.item}>
            <Link to={`${match.url}/incomes`}>
              <svg width="10" height="15">
                <use xlinkHref={`${sprite}#icon-arrow-right`} />
              </svg>
            </Link>
          </li>
        </ul>
        
        <ReportExpense/>
          
       
      </div>
      <div className={css.chart_wraper}>
       
      </div>
    </div>
  );
};

export default ReportView;