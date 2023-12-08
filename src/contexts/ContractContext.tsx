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
  multiCall: SmartContract<any> | undefined;
  address: string | undefined;
}>({
  isAdmin: false,
  daoContract: undefined,
  daoTokenContract: undefined,
  rewardTokenContract: undefined,
  multiCall: undefined,
  address: undefined,
});

const DAO_TOKEN_CONTRACT = "0x8d449A8B789E6f8BfF8a357114b30Ee7B4E5B31D";
const REWARD_TOKEN_CONTRACT = "0xDa10d7D13C2Ef59a2FbEb9E1519fE6bf25aFFCE6";
const DAO_CONTRACT = "0x58Bfc9b36cEAEf441efadaC7b126eDe22D17e1f6";

export const ContractContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const address = useAddress();
  const { contract: daoContract } = useContract(DAO_CONTRACT);
  const { contract: daoTokenContract } = useContract(DAO_TOKEN_CONTRACT);
  const { contract: rewardTokenContract } = useContract(REWARD_TOKEN_CONTRACT);
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
        multiCall,
        isAdmin,
        address,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
