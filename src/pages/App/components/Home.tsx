import chart from "../../../assets/chart.png";
import clipper from "../../../assets/clipper.png";
import swap from "../../../assets/swap.png";
import { FaPlus } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="flex justify-around">
        {/* chart */}
        <div>
          <img src={chart} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 p-6 bg-cs-pry text-white rounded-3xl ">
            <div className="bg-gray-500 p-6 rounded-xl">
              <FaPlus />
            </div>
            <input type="file" />
            {/* <div>
                <p>Upload impact</p>
              </div> */}
          </div>
          <div className="bg-[#E1FF99] flex flex-col items-center gap-5 p-6 rounded-3xl ">
            <div className=" flex justify-start gap-10 items-center w-full">
              <div className="bg-gray-500 text-white  p-6 rounded-xl">
                <img src={swap} className="w-5" alt="" />
              </div>
              <p className="font-semibold">Climatoks</p>
            </div>
            <div className="w-full">
              <p className="text-sm">Total Tokens</p>
              <div className="flex items-center justify-between mt-3">
                <p className="font-bold text-lg">198,500</p>
                <MdNavigateNext />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="font-bold text-lg mb-5">Products you may like</p>
        <div className="flex">
          <div>
            <img src={clipper} alt="" />
          </div>
          <div>
            <img src={clipper} alt="" />
          </div>
          <div>
            <img src={clipper} alt="" />
          </div>
          <div>
            <img src={clipper} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
