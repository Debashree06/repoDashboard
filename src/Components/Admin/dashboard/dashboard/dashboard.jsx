import EmployeeAgeDistribution from "../dashboardComponents/AgeDistribution";
import EmployeeCount from "../dashboardComponents/employeeCount";
import EmployeeStatusDistribution from "../dashboardComponents/EmployeeDistruibution";
import GenderEmployeeDistribution from "../dashboardComponents/GenderDistribution";
import QuickLinks from "../dashboardComponents/QuickLinks";
import TopLeaveTakers from "../dashboardComponents/TopLeaveTakers";
import YearsInServiceDistribution from "../dashboardComponents/YearsInService";

const Dashboard = () => {
  return (
    <div className="p-4">
    <div>
       <EmployeeCount/>
      </div>
      <div>
        <QuickLinks/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div>
          <YearsInServiceDistribution/>
        </div>
        <div>
          <EmployeeStatusDistribution/>
        </div>
        <div>
            <EmployeeAgeDistribution/>
        </div>
        <div>
            <GenderEmployeeDistribution/>
        </div>
        <div>
            <TopLeaveTakers/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
