import { IoFilter, IoSearchOutline } from "react-icons/io5";
import avatar from "../assets/avatar.png";
import { RiArrowDropDownLine } from "react-icons/ri";

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
      <div className="flex items-center gap-3">
        <img src={avatar} className="w-1/6" alt="" />
        <p className="flex">
          0x1234...6w1t78 <RiArrowDropDownLine size={20} />
        </p>
      </div>
    </div>
  );
};

export default DashHeader;
