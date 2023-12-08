import like from "../../../assets/like.png";
import img1 from "../../../assets/img1.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Impact = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="text-neutral-900 text-2xl font-bold w-full">
        Confirmed Impact
      </div>
      <div
        className="flex w-full flex-col justify-center mt-6 pl-7 pr-10 py-4 rounded-3xl max-md:px-5"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #254A1C 13.27%, #799E4C 69.33%, #DAFF83 113.48%)",
        }}
      >
        <div className="flex w-full justify-between gap-5 max-md:flex-wrap">
          <div className="flex justify-between gap-5">
            <img src={like} className="object-contain w-10" />
            <div className="text-white flex flex-col my-auto">
              <div className="text-lg font-semibold">
                Number of validated impact
              </div>
              <div className="mt-4">April</div>
            </div>
          </div>
          <div className="justify-between flex gap-5 my-auto pr-1.5 max-md:flex-wrap">
            <div className="flex justify-between gap-5 max-md:justify-center">
              <div className="text-white text-lg font-bold justify-center items-center border bg-black bg-opacity-10 px-6 py-3 rounded-xl border-solid border-white border-opacity-20">
                5
              </div>
              <div className="text-white text-lg font-bold justify-center items-center border bg-black bg-opacity-10 px-6 py-3 rounded-xl border-solid border-white border-opacity-20">
                2
              </div>
              <div className="text-white text-lg font-bold justify-center items-center border bg-black bg-opacity-10 px-6 py-3 rounded-xl border-solid border-white border-opacity-20">
                4
              </div>
            </div>
            <div className="text-white justify-center items-center bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
              <div className="font-medium">View all</div>
              <MdNavigateNext />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between items-center flex w-full gap-5 mt-14 pr-2.5 max-md:flex-wrap max-md:mt-10">
        <div className="text-neutral-900 text-2xl font-bold my-auto">
          Recent Impact
        </div>
        <div className="items-center flex gap-5 max-md:justify-center">
          <div className="justify-between items-center border flex gap-1 p-2 rounded-xl border-solid border-neutral-800">
            <MdNavigateBefore />
            <div className="text-neutral-700 text-sm">Prev</div>
          </div>
          <div className="text-neutral-800 font-medium my-auto">
            1-20 of 1024
          </div>
          <div className="justify-between items-center border flex gap-1 p-2 rounded-xl border-solid border-neutral-800">
            <div className="text-neutral-700 text-sm">Next</div>
            <MdNavigateNext />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col mt-5">
        <div className="justify-between items-start border flex w-full gap-5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
          <div className="flex justify-between gap-3">
            <img src={img1} className="object-contain" />
            <div className="flex flex-col my-auto">
              <div className="font-bold">Tree planting</div>
              <div className="text-sm mt-2">3rd mainland bridge</div>
            </div>
          </div>
          <div className="flex gap-1.5 my-auto">
            <div className="text-xs bg-lime-200 aspect-[1.75] justify-center p-2 rounded-2xl">
              Nature
            </div>
            <div className="text-xs justify-center bg-rose-400 p-2 rounded-2xl">
              Environment
            </div>
          </div>
          <div className="text-xs font-semibold my-auto">
            San Francisco, USA
          </div>
          <div className="justify-center items-center flex-col my-auto">
            <div className="text-neutral-900 text-lg font-bold">14</div>
            <div className="text-neutral-600 text-xs mt-1">Validations</div>
          </div>
          <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
            <div className="font-medium">Validate</div>
            <MdNavigateNext />
          </div>
        </div>
        <div className="justify-between items-start border flex w-full gap-5 mt-2.5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
          <div className="flex justify-between gap-3">
            <img src={img1} className="object-contain" />
            <div className="flex flex-col my-auto">
              <div className="font-bold">Tree planting</div>
              <div className="text-sm mt-2">3rd mainland bridge</div>
            </div>
          </div>
          <div className="flex gap-1.5 my-auto">
            <div className="text-xs bg-lime-200 aspect-[1.75] justify-center p-2 rounded-2xl">
              Nature
            </div>
            <div className="text-xs justify-center bg-rose-400 p-2 rounded-2xl">
              Environment
            </div>
          </div>
          <div className="text-xs font-semibold my-auto">
            San Francisco, USA
          </div>
          <div className="justify-center items-center flex-col my-auto">
            <div className="text-neutral-900 text-lg font-bold">14</div>
            <div className="text-neutral-600 text-xs mt-1">Validations</div>
          </div>
          <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
            <div className="font-medium">Validate</div>
            <MdNavigateNext />
          </div>
        </div>
        <div className="justify-between items-start border flex w-full gap-5 mt-2.5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
          <div className="flex justify-between gap-3">
            <img src={img1} className="object-contain" />
            <div className="flex flex-col my-auto">
              <div className="font-bold">Tree planting</div>
              <div className="text-sm mt-2">3rd mainland bridge</div>
            </div>
          </div>
          <div className="flex gap-1.5 my-auto">
            <div className="text-xs bg-lime-200 aspect-[1.75] justify-center p-2 rounded-2xl">
              Nature
            </div>
            <div className="text-xs justify-center bg-rose-400 p-2 rounded-2xl">
              Environment
            </div>
          </div>
          <div className="text-xs font-semibold my-auto">
            San Francisco, USA
          </div>
          <div className="justify-center items-center flex-col my-auto">
            <div className="text-neutral-900 text-lg font-bold">14</div>
            <div className="text-neutral-600 text-xs mt-1">Validations</div>
          </div>
          <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
            <div className="font-medium">Validate</div>
            <MdNavigateNext />
          </div>
        </div>
        <div className="justify-between items-start border flex w-full gap-5 mt-2.5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
          <div className="flex justify-between gap-3">
            <img src={img1} className="object-contain" />
            <div className="flex flex-col my-auto">
              <div className="font-bold">Tree planting</div>
              <div className="text-sm mt-2">3rd mainland bridge</div>
            </div>
          </div>
          <div className="flex gap-1.5 my-auto">
            <div className="text-xs bg-lime-200 aspect-[1.75] justify-center p-2 rounded-2xl">
              Nature
            </div>
            <div className="text-xs justify-center bg-rose-400 p-2 rounded-2xl">
              Environment
            </div>
          </div>
          <div className="text-xs font-semibold my-auto">
            San Francisco, USA
          </div>
          <div className="justify-center items-center flex-col my-auto">
            <div className="text-neutral-900 text-lg font-bold">14</div>
            <div className="text-neutral-600 text-xs mt-1">Validations</div>
          </div>
          <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
            <div className="font-medium">Validate</div>
            <MdNavigateNext />
          </div>
        </div>
        <div className="justify-between items-start border flex w-full gap-5 mt-2.5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
          <div className="flex justify-between gap-3">
            <img src={img1} className="object-contain" />
            <div className="flex flex-col my-auto">
              <div className="font-bold">Tree planting</div>
              <div className="text-sm mt-2">3rd mainland bridge</div>
            </div>
          </div>
          <div className="flex gap-1.5 my-auto">
            <div className="text-xs bg-lime-200 aspect-[1.75] justify-center p-2 rounded-2xl">
              Nature
            </div>
            <div className="text-xs justify-center bg-rose-400 p-2 rounded-2xl">
              Environment
            </div>
          </div>
          <div className="text-xs font-semibold my-auto">
            San Francisco, USA
          </div>
          <div className="justify-center items-center flex-col my-auto">
            <div className="text-neutral-900 text-lg font-bold">14</div>
            <div className="text-neutral-600 text-xs mt-1">Validations</div>
          </div>
          <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
            <div className="font-medium">Validate</div>
            <MdNavigateNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
