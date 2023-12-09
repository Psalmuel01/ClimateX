import {
  IoPlayCircleOutline,
  IoBagHandleOutline,
  IoHome,
} from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BsCalendar2Event } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed max-md:hidden flex flex-col items-center justify-between py-10 bg-cs-pry text-white text-3xl min-h-[calc(100vh-48px)] w-20 rounded-3xl">
      <div className="flex flex-col gap-16">
        <Link to="/" className="mx-auto">
          <RiArrowGoBackLine size={24} />
        </Link>
        <div className="flex flex-col gap-8">
          <Link to="/app">
            <IoHome />
          </Link>
          <Link to="/app/impact">
            <IoPlayCircleOutline />
          </Link>
          <Link to="/app/marketplace">
            <IoBagHandleOutline />
          </Link>
          <Link to="/app/events" className="mx-auto">
            <BsCalendar2Event size={24} />
          </Link>
        </div>
      </div>
      <div>
        <IoPlayCircleOutline />
      </div>
    </div>
  );
};

export default Sidebar;
