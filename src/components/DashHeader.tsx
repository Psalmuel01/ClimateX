import { ConnectWallet } from "@thirdweb-dev/react";
import { IoFilter, IoSearchOutline } from "react-icons/io5";
import DashNav from "./DashNav";

const DashHeader = () => {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex items-center gap-5">
        <DashNav />
        <div className="flex items-center gap-2 md:w-80 px-5 max-md:px-3 py-2 rounded-xl bg-gray-200">
          <IoSearchOutline />
          <input
            className="max-md:hidden bg-gray-200 w-full outline-none"
            placeholder="Search"
          />
          <input
            className="md:hidden text-sm bg-gray-200 w-full outline-none"
            placeholder="Search"
          />
        </div>
        <IoFilter className="max-md:hidden" size={18} />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default DashHeader;
