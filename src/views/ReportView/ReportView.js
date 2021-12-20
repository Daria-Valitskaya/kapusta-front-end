import IncomeExpenses from "../../Сomponents/IncomeExpenses/IncomeExpenses";
import BalansReportView from "../../Сomponents/BalansReportView/BalansReportView";
import MobileTabs from "../../Сomponents/MobileTabs";

export default function ReportView() {
  return (
    <div>
      <BalansReportView />
      <IncomeExpenses />
      <MobileTabs />
    </div>
  );
}
