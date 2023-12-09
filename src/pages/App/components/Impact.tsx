import like from "../../../assets/like.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContext, useMemo } from "react";
import {
  SmartContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ImpactRewardee } from "./UserImpacts";

enum Status {
  Pending,
  Approved,
}

enum AdminStatus {
  Voting_In_Progress,
  Waiting_For_Validation,
  Approved,
}

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
          <div className="text-neutral-800 font-medium my-auto">
            1-20 of 1024
          </div>
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
  status,
  owner,
}) => {
  const { data: hasVoted } = useContractRead(daoContract, "hasVoted", [
    address,
    Number(id_),
  ]);

  const { data: daotime } = useContractRead(daoContract, "daotime", [
    Number(id_),
  ]);

  const { mutateAsync: vote } = useContractWrite(daoContract, "vote");
  const { mutateAsync: approveImpact } = useContractWrite(
    daoContract,
    "approveImpact"
  );
  const { mutateAsync: rewardImpact } = useContractWrite(
    daoContract,
    "rewardImpact"
  );

  const impactStatus = useMemo(() => {
    const realDate = Number(daotime) * 1000;
    if (isAdmin) {
      if (status === Status.Approved) {
        return AdminStatus.Approved;
      }
      if (realDate > Date.now()) {
        return AdminStatus.Voting_In_Progress;
      } else {
        return AdminStatus.Waiting_For_Validation;
      }
    } else {
      if (Date.now() > realDate) {
        return AdminStatus.Waiting_For_Validation;
      }
      if (status === Status.Approved) {
        return Status.Approved;
      }
      if (status === Status.Pending) {
        return AdminStatus.Voting_In_Progress;
      }
    }
  }, [status, daotime, isAdmin]);

  const voteYay = async () => {
    if (isAdmin && !hasVoted) {
      await vote({
        args: [Number(id_), Votes.YAY],
      });
    }
  };
  const voteNay = async () => {
    if (isAdmin && !hasVoted) {
      await vote({
        args: [Number(id_), Votes.NAY],
      });
    }
  };

  const validateImpact = async () => {
    if (isAdmin) {
      await approveImpact({
        args: [Number(id_)],
      });
    }
  };
  const claimReward = async () => {
    await rewardImpact({
      args: [Number(id_)],
    });
  };

  const renderStatus = () => {
    if (isAdmin) {
      if (impactStatus === AdminStatus.Waiting_For_Validation) {
        return (
          <button onClick={validateImpact}>
            <div className="font-medium">Validate</div>
            <MdNavigateNext />
          </button>
        );
      }
      if (impactStatus === AdminStatus.Voting_In_Progress) {
        return <p>Voting in progress</p>;
      }

      if (impactStatus === AdminStatus.Approved) {
        if (owner === address) {
          return (
            <button onClick={claimReward}>
              <div className="font-medium">Claim Reward</div>
              <MdNavigateNext />
            </button>
          );
        }
        return <p>Approved</p>;
      }
    } else {
      if (impactStatus === AdminStatus.Voting_In_Progress) {
        return <p>Voting in progress</p>;
      }
      if (impactStatus === Status.Approved) {
        return (
          <button onClick={claimReward}>
            <div className="font-medium">Claim Reward</div>
            <MdNavigateNext />
          </button>
        );
      }
    }
  };

  return (
    <div className="flex w-full flex-col mt-5">
      <div className="justify-between items-start border flex w-full gap-5 py-3 rounded-[40px] border-solid border-black border-opacity-0 max-md:flex-wrap max-md:justify-center max-md:px-5">
        <div className="flex items-center gap-3 flex-1">
          <img
            src={imageUrl}
            className="object-cover w-16 rounded-full h-16 border"
          />
          <div className="flex flex-col my-auto">
            <div className="font-bold">{title}</div>
            <div className="text-sm mt-2 truncate w-80">{description}</div>
          </div>
        </div>
        <div className="flex gap-1.5 my-auto flex-1">
          <button
            className={`flex bg-lime-200 items-center justify-between p-2 px-4 rounded-full w-20 text-lg ${
              isAdmin && !hasVoted
                ? "hover:bg-lime-300 hover:scale-105"
                : "cursor-none"
            }`}
            onClick={voteYay}
          >
            <p>{Number(yayvotes)}</p> <span className="text-2xl">👍🏾</span>
          </button>
          <button
            className={`flex items-center justify-between bg-rose-400 p-2 px-4 rounded-full w-20 text-lg ${
              isAdmin && !hasVoted
                ? "hover:bg-rose-300 hover:scale-105"
                : "cursor-none"
            }`}
            onClick={voteNay}
          >
            <p>{Number(nayvotes)}</p> <span className="text-2xl">👎🏾</span>
          </button>
        </div>
        <div className="text-xs font-semibold my-auto flex-1">{location}</div>

        <div className="justify-center items-center text-white bg-lime-950 flex gap-1 my-auto p-2.5 rounded-3xl">
          {renderStatus()}
        </div>
      </div>
    </div>
  );
};

export default Impact;
