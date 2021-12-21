import { useState, useEffect } from 'react';
import BalansForm from "../../Сomponents/BalansForm/BalansForm";
import ContainerTabs from "../../Сomponents/ContainerTabs";
import MobileTabs from "../../Сomponents/MobileTabs";
import CalendarBar from "../../Сomponents/CalendarBar";
import s from './HomeViews.module.css';

export default function HomeViews() {
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
    <div className={s.wrapper}>
      <BalansForm />
      {/* {width <= 767 &&
        <CalendarBar />
      } */}
      
      <MobileTabs />
      <ContainerTabs />
    </div>
  );
}
