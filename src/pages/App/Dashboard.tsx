import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="px-8 py-6">
      <Sidebar />
      <div className="ml-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
