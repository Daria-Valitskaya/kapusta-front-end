import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import Summary from "../Summary/Summary";
import CalendarComponent from "../CalendarBar";
import InputPanel from "../InputPanel";
import { StandartBtn } from "../Buttons";
import Table from "../Table";
import s from "./ContainerTabs.module.css";

const ContainerTabs = () => {
  const income = useSelector(transactionsSelectors.getAllIncome);
  const expense = useSelector(transactionsSelectors.getAllExpenses);
  console.log(income);
  console.log(expense);

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
              <Table />
              <Summary />
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
              <Table />
              <Summary />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ContainerTabs;
