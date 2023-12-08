import { SmartContract, useContract } from "@thirdweb-dev/react";
import { ReactNode, createContext } from "react";

export const ContractContext = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: SmartContract<any> | undefined;
}>({
  daoContract: undefined,
  daoTokenContract: undefined,
  rewardTokenContract: undefined,
});

const DAO_TOKEN_CONTRACT = "0xa2b058528741AFC93631B26F1f71546dAa1B7f34";
const REWARD_TOKEN_CONTRACT = "0x9e609f87336adf22D19E573417cf00e44Bec194a";
const DAO_CONTRACT = "0xcD81aFBAb25A58381B7DDcC1884839Ea26eAE784";

export const ContractContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { contract: daoContract } = useContract(DAO_CONTRACT);
  const { contract: daoTokenContract } = useContract(DAO_TOKEN_CONTRACT);
  const { contract: rewardTokenContract } = useContract(REWARD_TOKEN_CONTRACT);

  return (
    <ContractContext.Provider
      value={{
        daoContract,
        daoTokenContract,
        rewardTokenContract,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
