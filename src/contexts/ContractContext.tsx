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

const DAO_TOKEN_CONTRACT = "0x12B9FceD944c68660F7b820c3f2d49cF268855d9";
const REWARD_TOKEN_CONTRACT = "0x1453E47D458a3Deda26Ce03d0EB3Cc0E6b99955F";
const DAO_CONTRACT = "0xec73B503299cFc29617Bd2B2dbBDF0175b3B326d";
const MARKETPLACE_CONTRACT = "0xC9462d001a8130F5c897a6EAe17097Aef839d10D";

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
  console.log(adminToken);
  console.log(isAdmin);

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
