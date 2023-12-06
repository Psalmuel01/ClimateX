import { IoPlayCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col items-center justify-around bg-cs-pry text-white text-4xl min-h-[calc(100vh-48px)] w-20 rounded-2xl">
      <div className="flex flex-col gap-10">
        <div>
          <IoPlayCircleOutline />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <IoPlayCircleOutline />
          </div>
          <div>
            <IoPlayCircleOutline />
          </div>
          <div>
            <IoPlayCircleOutline />
          </div>
          <div>
            <IoPlayCircleOutline />
          </div>
        </div>
      </div>
      <div>
        <IoPlayCircleOutline />
      </div>
    </div>
  );
};

export default Sidebar;
