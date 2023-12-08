import { ConnectWallet } from "@thirdweb-dev/react";
import { IoFilter, IoSearchOutline } from "react-icons/io5";

const DashHeader = () => {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 w-80 px-5 py-2 rounded-xl bg-gray-200">
          <IoSearchOutline />
          <input
            className=" bg-gray-200 w-full outline-none"
            placeholder="Search"
          />
        </div>
        {/* <IoSearchOutline />
          <p>Search</p> */}
        <IoFilter size={18} />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default DashHeader;
