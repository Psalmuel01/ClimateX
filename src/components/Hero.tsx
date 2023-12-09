import { IoPlayCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import woods from "../assets/woods.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col py-5 gap-10 max-md:py-10">
      <div className="md:flex max-md:text-center">
        <div className="flex flex-col my-auto gap-6 max-md:mb-10">
          <h1 className="font-medium text-5xl max-md:text-4xl w-2/3 max-md:w-full leading-relaxed  max-md:leading-relaxed">
            Make Earth a better place{" "}
            <span className="font-bold">Earn tokens</span>
          </h1>
          <div className="flex gap-3 text-xl max-md:text-lg max-md:justify-center">
            <Link
              to="/app"
              className="bg-cs-pry text-white px-5 py-2 rounded-3xl"
            >
              Get started
            </Link>
            <p className="flex items-center gap-1 px-5 py-2 rounded-3xl border border-[#141414]">
              <IoPlayCircleOutline />
              See demo
            </p>
          </div>
        </div>
        <div>
          <img src={woods} alt="" />
        </div>
      </div>
      <div className="md:flex justify-between items-center">
        <div className="max-md:mb-10">
          <div className="font-semibold text-2xl rounded-3xl w-fit py-10 px-5 bg-gradient-to-t from-amber-800 via-gray-500 to-transparent">
            1 Million+ trees planted
          </div>
          <div className="flex gap-3 pl-6">
            <div className="w-3 h-3 rounded-full bg-cs-pry"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="md:flex gap-5 w-1/2 max-md:w-full">
          <div className="flex flex-col gap-3 max-md:mb-7">
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-300">
                <CiLock />
              </div>
              <p>About us</p>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-300">
                <CiLock />
              </div>
              <p>About us</p>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
