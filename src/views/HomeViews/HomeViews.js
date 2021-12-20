import BalansForm from "../../Сomponents/BalansForm/BalansForm";
import ContainerTabs from "../../Сomponents/ContainerTabs";
import MobileTabs from "../../Сomponents/MobileTabs";

export default function HomeViews() {
  return (
    <div style={{paddingBottom: '57px'}}>
      <BalansForm />
      <MobileTabs />
      <ContainerTabs />
    </div>
  );
}
