import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  transactionsSelectors,
  transactionsOperations,
} from "../../redux/transactions";
import { updateBalance } from "../../redux/auth/auth-slice";
import CalendarBar from "../CalendarBar";
import InputPanel from "../InputPanel";
import Summary from "../Summary/Summary";
import Table from "../Table";
import categoriesExpense from "../../data/categoryConsumption.json";
import categoriesIncome from "../../data/categoryIncome.json";
import s from "./ContainerTabs.module.css";

const prepareDate = (activeDate) => {
  const date = String(activeDate.getDate()).padStart(2, "0");
  const month = String(activeDate.getMonth() + 1).padStart(2, "0");
  const year = activeDate.getFullYear();
  const period = `${month}.${year}`;
  const fullDate = `${date}.${period}`;

  return { fullDate, period };
};

const ContainerTabs = () => {
  const dispatch = useDispatch();

  const [refresher, setRefresher] = useState();
  const [activeDate, setActiveDate] = useState(new Date());

  const { fullDate, period } = prepareDate(activeDate);

  useEffect(() => {
    dispatch(
      transactionsOperations.getSummary({
        transactionType: "expense",
        date: fullDate,
      })
    );
    dispatch(
      transactionsOperations.getSummary({
        transactionType: "income",
        date: fullDate,
      })
    );
    dispatch(
      transactionsOperations.getTransForPeriod({
        transactionType: "expense",
        period,
      })
    );
    dispatch(
      transactionsOperations.getTransForPeriod({
        transactionType: "income",
        period,
      })
    );
  }, [dispatch, fullDate, period, refresher]);

  const resultTransactions = useSelector(
    transactionsSelectors.getTransactionsForPeriod
  );

  const { expensesTab, incomeTab } = useMemo(() => {
    const onSubmit = (transactionType, transactionData) => {
      const transaction = {
        transactionType,
        date: fullDate,
        ...transactionData,
      };
      dispatch(transactionsOperations.addTransaction(transaction));
      dispatch(updateBalance(transaction));
      setRefresher({});
    };
    const getTabPanel = (transactionType, summarySelector, categories) => (
      <TabPanel>
        <div className={s.tabPanel}>
          <div className={s.setDataWrapper}>
            <CalendarBar
              value={activeDate}
              onChange={setActiveDate}
              fullDate={fullDate}
            />
            <InputPanel
              categories={categories}
              onSubmit={(transactionData) =>
                onSubmit(transactionType, transactionData)
              }
            />
          </div>
          <div className={s.wrapper}>
            <Table
              array={[...resultTransactions[transactionType]]}
              transactionType={transactionType}
              onUpdate={(transaction) => {
                dispatch(updateBalance(transaction));
                setRefresher({});
              }}
            />
            <Summary selector={summarySelector} />
          </div>
        </div>
      </TabPanel>
    );

    return {
      expensesTab: getTabPanel(
        "expense",
        transactionsSelectors.getAllExpenses,
        categoriesExpense
      ),
      incomeTab: getTabPanel(
        "income",
        transactionsSelectors.getAllIncome,
        categoriesIncome
      ),
    };
  }, [activeDate, dispatch, fullDate, resultTransactions]);

  return (
    <>
      <Tabs className={s.tabsContainer}>
        <TabList className={s.tabList}>
          <Tab className={s.tab} selectedClassName={s.selectedTab}>
            Расход
          </Tab>
          <Tab className={s.tab} selectedClassName={s.selectedTab}>
            Доход
          </Tab>
        </TabList>

        {expensesTab}
        {incomeTab}
      </Tabs>
    </>
  );
};

export default ContainerTabs;
