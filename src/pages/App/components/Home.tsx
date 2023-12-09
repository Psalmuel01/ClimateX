import chart from "../../../assets/chart.png";

import swap from "../../../assets/swap.png";
import { FaPlus } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import Modal from "./Modal";
import AddImpact from "./AddImpact";
import { useContext, useState } from "react";
import UserImpacts from "./UserImpacts";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContractRead } from "@thirdweb-dev/react";

const initCB = () => {};

const Home = () => {
  const [addImpactCallBack, setAddImpactCallBack] =
    useState<() => void>(initCB);

  const { rewardTokenContract, address } = useContext(ContractContext);

  const { data: balance } = useContractRead(rewardTokenContract, "balanceOf", [
    address,
  ]);

  return (
    <div>
      <div className="flex gap-8">
        {/* chart */}
        <div className="flex-1">
          <img src={chart} alt="" className="w-full" />
        </div>
        <div className="flex-1 grid gap-5">
          <div className="flex items-center gap-5 py-3 p-6 bg-cs-pry text-white rounded-[40px] ">
            <Modal
              modalButton={
                <div className="bg-[#D9D9D933] p-6 rounded-3xl hover:bg-gray-600 cursor-pointer">
                  <FaPlus size={48} />
                </div>
              }
              title="Add Impact"
              setCallBack={setAddImpactCallBack}
              refetch={() => {}}
            >
              <AddImpact done={addImpactCallBack} />
            </Modal>

            {/* <input type="file" /> */}
            <div>
              <p>Upload impact</p>
            </div>
          </div>
          <div className="bg-[#E1FF99] grid  gap-5 rounded-[40px] ">
            <div className=" flex justify-start gap-10 items-center w-full p-4 rounded-[40px] shadow-lg border-2 border-[#ffffff]">
              <div className="bg-gray-500 text-white  p-6 rounded-3xl">
                <img src={swap} className="w-12" alt="" />
              </div>
              <p className="font-semibold">Climatoks</p>
            </div>
            <div className="w-full p-7 pl-12 pb-9">
              <p className="text-sm">Total Tokens</p>
              <div className="flex items-center justify-between mt-3">
                <p className="font-bold text-2xl">
                  {Number(balance) / 10 ** 18 || 0}
                </p>
                <MdNavigateNext
                  size={26}
                  className="border border-black rounded-full p-0.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="font-bold text-2xl mb-5">Your Impact</p>
        <UserImpacts />
      </div>
    </div>
  );
};

export default Home;
