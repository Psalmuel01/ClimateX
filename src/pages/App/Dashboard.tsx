import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashHeader from "../../components/DashHeader";

const Dashboard = () => {
  return (
    <div className="px-8 py-6 max-md:px-4 max-md:py-3">
      <Sidebar />
      <div className="ml-32 mr-12 max-md:m-0">
        <DashHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
