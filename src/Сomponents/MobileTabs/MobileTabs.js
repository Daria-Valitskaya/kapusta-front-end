import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { transactionsSelectors } from "../../redux/transactions";
import MobileTable from '../MobileTable';

import s from './MobileTabs.module.css';

const MobileTabs = () => {
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
  <Tabs className={s.tabsContainer}>
    <TabPanel>
      <div className={s.tabPanel}>
        <MobileTable array={expenseTransactions}/>
      </div>
    </TabPanel>
    <TabPanel>
      <div className={s.tabPanel}>
        <MobileTable array={incomeTransactions}/>
      </div>
    </TabPanel>

    <TabList className={s.tabList}>
      <Tab className={s.tab} selectedClassName={s.selectedTab}>Расход</Tab>
      <Tab className={s.tab} selectedClassName={s.selectedTab}>Доход</Tab>
    </TabList>
  </Tabs>
)};

export default MobileTabs;