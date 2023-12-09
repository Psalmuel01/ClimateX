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

const DAO_TOKEN_CONTRACT = "0x7cD28B73D8AFe3219D742178f2660eC3D018A5E4";
const REWARD_TOKEN_CONTRACT = "0x3aaCcC7C02763BFfCC01EB6F2958aF6FE0a9248B";
const DAO_CONTRACT = "0x8a18c466229B0D78cE013314Af5505A5aD6924bF";
const MARKETPLACE_CONTRACT = "0xeA654760768D99A2cf54E37A65200024957Ebd5c";

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
