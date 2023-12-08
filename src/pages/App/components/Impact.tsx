import like from "../../../assets/like.png";
import img1 from "../../../assets/img1.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContext, useMemo } from "react";
import {
  SmartContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ImpactRewardee } from "./UserImpacts";

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
          {isAdmin ? "Recent Impact" : "Your Impact"}
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

interface IImpactBar extends ImpactRewardee {
  isAdmin: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  daoContract: SmartContract<any>;
  address: string;
}

enum Votes {
  YAY,
  NAY,
}

const ImpactBar: React.FC<IImpactBar> = ({
  imageUrl,
  title,
  location,
  description,
  yayvotes,
  nayvotes,
  isAdmin,
  daoContract,
  address,
  id_,
}) => {
  const { data: hasVoted } = useContractRead(daoContract, "hasVoted", [
    address,
    Number(id_),
  ]);

  const { mutateAsync } = useContractWrite(daoContract, "vote");

  console.log(hasVoted);
  const voteYay = async () => {
    if (isAdmin && !hasVoted) {
      await mutateAsync({
        args: [Number(id_), Votes.YAY],
      });
    }
  };
  const voteNay = async () => {
    if (isAdmin && !hasVoted) {
      await mutateAsync({
        args: [Number(id_), Votes.NAY],
      });
    }
  };

  return (
    <div className="flex w-full flex-col mt-5">
      <div className="justify-between items-start border flex w-full gap-5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
        <div className="flex items-center gap-3 flex-1">
          <img
            src={imageUrl}
            className="object-contain w-16 rounded-full h-16 border"
          />
          <div className="flex flex-col my-auto">
            <div className="font-bold">{title}</div>
            <div className="text-sm mt-2">{description}</div>
          </div>
        </div>
        <div className="flex gap-1.5 my-auto flex-1">
          <button
            className={`flex bg-lime-200 items-center justify-between p-2 rounded-full w-20 ${
              isAdmin && !hasVoted
                ? "hover:bg-lime-300 hover:scale-105"
                : "cursor-none"
            }`}
            onClick={voteYay}
          >
            <p>{Number(yayvotes)}</p> <span className="mr-2 text-2xl">👍🏾</span>
          </button>
          <button
            className={`flex items-center justify-between bg-rose-400 p-2 rounded-full w-20 ${
              isAdmin && !hasVoted
                ? "hover:bg-rose-300 hover:scale-105"
                : "cursor-none"
            }`}
            onClick={voteNay}
          >
            <p>{Number(nayvotes)}</p> <span className="mr-2 text-2xl">👎🏾</span>
          </button>
        </div>
        <div className="text-xs font-semibold my-auto flex-1">{location}</div>
        <div className="justify-center items-center flex-col my-auto flex-1">
          <div className="text-neutral-900 text-lg font-bold">14</div>
          <div className="text-neutral-600 text-xs mt-1">Validations</div>
        </div>
        <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
          <div className="font-medium">Validate</div>
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default Impact;
