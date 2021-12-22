import { useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { transactionsSelectors } from "../../redux/transactions";
import { StandartBtn } from "../Buttons";
import CalendarComponent from "../CalendarBar";
import InputPanel from "../InputPanel";
import Summary from "../Summary/Summary";
import Table from "../Table";
import s from "./ContainerTabs.module.css";

const ContainerTabs = () => {
  const summaryExpense = useSelector(transactionsSelectors.getAllExpenses);
  const summaryIncome = useSelector(transactionsSelectors.getAllIncome);
  const transactionsByPeriod = useSelector(
    transactionsSelectors.getTransactionsForPeriod
  );
  const resultTransactions = Object.values(transactionsByPeriod).flat();
  const expenseTransactions = resultTransactions.filter(
    (item) => item.transactionType === "expense"
  );
  const incomeTransactions = resultTransactions.filter(
    (item) => item.transactionType === "income"
  );

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

        <TabPanel>
          <div className={s.tabPanel}>
            <div className={s.setDataWrapper}>
              <CalendarComponent />
              <InputPanel />
              <div className={s.buttonWrapper}>
                <StandartBtn>ввод</StandartBtn>
                <StandartBtn>очистить</StandartBtn>
              </div>
            </div>
            <div className={s.wrapper}>
              <Table array={expenseTransactions} />
              {/* <Summary array={summaryExpense}/> */}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.tabPanel}>
            <div className={s.setDataWrapper}>
              <CalendarComponent />
              <InputPanel />
              <div className={s.buttonWrapper}>
                <StandartBtn>ввод</StandartBtn>
                <StandartBtn>очистить</StandartBtn>
              </div>
            </div>
            <div className={s.wrapper}>
              <Table array={incomeTransactions} />
              <Summary array={summaryIncome} />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ContainerTabs;
