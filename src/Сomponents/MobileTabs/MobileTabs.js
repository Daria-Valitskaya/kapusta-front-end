import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MobileTable from '../MobileTable';

import s from './MobileTabs.module.css';

const MobileTabs = () => {
return (
  <Tabs className={s.tabsContainer}>
    <TabPanel>
      <div className={s.tabPanel}>
        <MobileTable />
      </div>
    </TabPanel>
    <TabPanel>
      <div className={s.tabPanel}>
        <MobileTable />
      </div>
    </TabPanel>

    <TabList className={s.tabList}>
      <Tab className={s.tab} selectedClassName={s.selectedTab}>Расход</Tab>
      <Tab className={s.tab} selectedClassName={s.selectedTab}>Доход</Tab>
    </TabList>
  </Tabs>
)};

export default MobileTabs;