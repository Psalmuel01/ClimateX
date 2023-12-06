import {
  IoPlayCircle,
  IoPlayCircleOutline,
  IoBagHandleOutline,
  IoBagHandle,
  IoHome,
  IoHomeOutline,
} from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import { BsCalendar2Event, BsCalendar2EventFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col items-center justify-between py-10 bg-cs-pry text-white text-3xl min-h-[calc(100vh-48px)] w-20 rounded-3xl">
      <div className="flex flex-col gap-16">
        <div>
          <MdNotificationAdd />
        </div>
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
          <Link to="/app/events">
            <BsCalendar2Event />
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
