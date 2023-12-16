import like from "../../../assets/like.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContext, useMemo } from "react";
import { useContractRead } from "@thirdweb-dev/react";
import { ImpactRewardee } from "./UserImpacts";
import ImpactBar from "./ImpactBar";

const Impact = () => {
  const { isAdmin, daoContract, address } = useContext(ContractContext);

  console.log({ isAdmin });

  const { data: allImpacts } = useContractRead(daoContract, "getImpacts", []);
  const { data: userImpact } = useContractRead(daoContract, "getUserImpacts", [
    address,
  ]);

  const finalData = useMemo(
    () => (isAdmin ? allImpacts : userImpact) as ImpactRewardee[],
    [allImpacts, userImpact, isAdmin]
  );

  console.log({ finalData });

  return (
    <div className="flex flex-col px-5">
      <div className="text-neutral-900 text-2xl max-md:text-xl font-bold w-full">
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
              <div className="md:text-lg font-semibold">
                Number of validated impact
              </div>
              <div className="mt-4">April</div>
            </div>
          </div>
          <div className="justify-between flex gap-5 my-auto pr-1.5 max-md:flex-wrap">
            <div className="flex justify-between gap-5 max-md:justify-center">
              <div className="text-white md:text-lg font-bold justify-center items-center border bg-black bg-opacity-10 px-6 py-3 rounded-xl border-solid border-white border-opacity-20">
                5
              </div>
              <div className="text-white md:text-lg font-bold justify-center items-center border bg-black bg-opacity-10 px-6 py-3 rounded-xl border-solid border-white border-opacity-20">
                2
              </div>
              <div className="text-white md:text-lg font-bold justify-center items-center border bg-black bg-opacity-10 px-6 py-3 rounded-xl border-solid border-white border-opacity-20">
                4
              </div>
            </div>
            <div className="text-white justify-center items-center bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
              <div className="font-medium max-md:text-sm">View all</div>
              <MdNavigateNext />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between items-center flex w-full gap-5 mt-14 pr-2.5 max-md:flex-wrap max-md:mt-10">
        <div className="text-neutral-900 text-2xl max-md:text-xl font-bold my-auto">
          {isAdmin ? "Recent Impact" : "Your Impact"}
        </div>
        <div className="items-center flex gap-5 max-md:justify-center">
          <div className="justify-between items-center text-sm max-md:text-xs border flex gap-1 p-2 rounded-xl border-solid border-neutral-800">
            <MdNavigateBefore />
            <div className="text-neutral-700">Prev</div>
          </div>
          <div className="text-neutral-800 font-medium my-auto">1/1</div>
          <div className="justify-between items-center text-sm max-md:text-xs border flex gap-1 p-2 rounded-xl border-solid border-neutral-800">
            <div className="text-neutral-700">Next</div>
            <MdNavigateNext />
          </div>
        </div>
      </div>

      <>
        {finalData?.map((impact) => (
          <ImpactBar
            key={impact.id_}
            {...impact}
            isAdmin={isAdmin}
            daoContract={daoContract!}
            address={address!}
          />
        ))}
      </>
    </div>
  );
};

export default Impact;
