/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SmartContract,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { ReactNode, createContext, useMemo } from "react";

export const ContractContext = createContext<{
  isAdmin: boolean;
  daoContract: SmartContract<any> | undefined;
  daoTokenContract: SmartContract<any> | undefined;
  rewardTokenContract: SmartContract<any> | undefined;
  marketplaceContract: SmartContract<any> | undefined;
  multiCall: SmartContract<any> | undefined;
  address: string | undefined;
}>({
  isAdmin: false,
  daoContract: undefined,
  daoTokenContract: undefined,
  rewardTokenContract: undefined,
  marketplaceContract: undefined,
  multiCall: undefined,
  address: undefined,
});

const DAO_TOKEN_CONTRACT = "0xE5935E7f16Cc910Cf20B6af95BB510BEB272595e";
const REWARD_TOKEN_CONTRACT = "0x668062cDb83fdd2871b55d2d43eD539B783E6A67";
const DAO_CONTRACT = "0x64Cfe1121c112E1C7a55522CA0183352BC8C56cC";
const MARKETPLACE_CONTRACT = "0x6750c20D2dcCBBb5e99Ef6A41Cab11491799992e";

export const ContractContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const address = useAddress();
  const { contract: daoContract } = useContract(DAO_CONTRACT);
  const { contract: daoTokenContract } = useContract(DAO_TOKEN_CONTRACT);
  const { contract: rewardTokenContract } = useContract(REWARD_TOKEN_CONTRACT);
  const { contract: marketplaceContract } = useContract(MARKETPLACE_CONTRACT);
  const { contract: multiCall } = useContract(
    "0x25Eef291876194AeFAd0D60Dff89e268b90754Bb"
  );

  const { data: adminToken } = useContractRead(daoTokenContract, "balanceOf", [
    address,
  ]);

  const isAdmin = useMemo(() => Number(adminToken) > 0, [adminToken]);

  return (
    <ContractContext.Provider
      value={{
        daoContract,
        daoTokenContract,
        rewardTokenContract,
        marketplaceContract,
        multiCall,
        isAdmin,
        address,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
