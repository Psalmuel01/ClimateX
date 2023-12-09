import { useContext, useMemo } from "react";
import { ContractContext } from "../../../contexts/ContractContext";
import { ConnectWallet, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

enum Status {
  Pending,
  Approved,
}

export interface ImpactRewardee {
  id_: bigint;
  owner: string;
  title: string;
  description: string;
  location: string;
  yayvotes: bigint;
  nayvotes: bigint;
  noOfImpacts: bigint;
  imageUrl: string;
  status: Status;
}

const UserImpacts = () => {
  const { daoContract } = useContext(ContractContext);
  const address = useAddress();

  const { data } = useContractRead(daoContract, "getUserImpacts", [address]);
  const impactData = useMemo(() => data as ImpactRewardee[], [data]);

  console.log(impactData);

  return (
    <div className="flex  gap-4">
      {address ? (
        impactData?.length > 0 ? (
          impactData.map(({ id_, title, description, imageUrl }) => (
            <div
              className="rounded-xl border-[#376F2A33] shadow-md border p-4 w-72"
              key={id_}
            >
              <img
                src={imageUrl}
                alt=""
                className="w-full  aspect-square object-cover object-center"
              />
              <p>{title}</p>
              <p>{description}</p>
            </div>
          ))
        ) : (
          <div className="grid place-content-center w-full h-48">
            <p>You have no impacts</p>
          </div>
        )
      ) : (
        <div className="grid place-content-center w-full h-48">
          <ConnectWallet />
        </div>
      )}
    </div>
  );
};

export default UserImpacts;
