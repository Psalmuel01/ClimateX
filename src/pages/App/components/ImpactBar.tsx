import {
  SmartContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ImpactRewardee } from "./UserImpacts";
import { useMemo } from "react";
import { MdNavigateNext } from "react-icons/md";

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

enum Status {
  Pending,
  Approved,
  Rejected,
}

enum AdminStatus {
  Voting_In_Progress,
  Waiting_For_Validation,
  Approved,
  Claimed,
  Rejected,
}

const ImpactBar: React.FC<IImpactBar> = ({
  imageUrl,
  title,
  location,
  description,
  yayvotes,
  nayvotes,
  hasClaimed,
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
      if (hasClaimed) {
        return AdminStatus.Claimed;
      }
      if (status === Status.Approved) {
        return AdminStatus.Approved;
      }
      if (status === Status.Rejected) {
        return AdminStatus.Rejected;
      }
      if (realDate > Date.now()) {
        return AdminStatus.Voting_In_Progress;
      } else {
        return AdminStatus.Waiting_For_Validation;
      }
    } else {
      if (hasClaimed) {
        return AdminStatus.Claimed;
      }
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
  }, [daotime, isAdmin, hasClaimed, status]);

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
    const buttonClass = "justify-center items-center w-full flex gap-1";
    if (impactStatus == AdminStatus.Claimed) {
      return <p>Claimed</p>;
    }
    if (impactStatus == AdminStatus.Rejected) {
      return <p>Rejected</p>;
    }
    if (isAdmin) {
      if (impactStatus === AdminStatus.Waiting_For_Validation) {
        return (
          <button onClick={validateImpact} className={buttonClass}>
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
            <button onClick={claimReward} className={buttonClass}>
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
          <button onClick={claimReward} className={buttonClass}>
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

        <div className="w-28 text-center text-white bg-lime-950 my-auto p-2.5 rounded-3xl">
          {renderStatus()}
        </div>
      </div>
    </div>
  );
};

export default ImpactBar;
