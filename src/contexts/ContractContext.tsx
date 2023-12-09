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

const DAO_TOKEN_CONTRACT = "0x0D9EEc9feD47099298cC7Ec9037bA046A240Ba9F";
const REWARD_TOKEN_CONTRACT = "0xe064354aea6Fcc053C72f15a60e60bCdE1282b9F";
const DAO_CONTRACT = "0x0Ee606454056574090Fe3309F8AA9112c776E230";
const MARKETPLACE_CONTRACT = "0x8226A3683E40813154621aF0347cb32F72FE043d";

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
