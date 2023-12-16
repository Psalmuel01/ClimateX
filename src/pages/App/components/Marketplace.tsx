import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Card from "../../../components/Card";
import AddMarketplaceItem from "./AddMarketplaceItem";
import ViewProduct from "./ViewProduct";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContext, useState } from "react";
import Modal from "./Modal";
import { useContractRead } from "@thirdweb-dev/react";

export interface Product {
  id: bigint;
  name: string;
  description: string;
  price: bigint;
  sold: bigint;
  image: string;
  availableItems: bigint;
}

const Marketplace = () => {
  const { isAdmin, marketplaceContract, rewardTokenContract, address } =
    useContext(ContractContext);
  const [addMarketCallBack, setAddMarketCallBack] = useState<() => void>(
    () => () => {}
  );

  const { data: marketplaceData } = useContractRead(
    marketplaceContract,
    "showProducts"
  );

  const { data: balance } = useContractRead(rewardTokenContract, "balanceOf", [
    address,
  ]);

  console.log({ marketplaceData });

  return (
    <div className="justify-center flex flex-col px-5">
      <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-2xl max-md:text-xl font-bold">Market place</div>
        {isAdmin ? (
          <Modal
            modalButton={
              <div className="cursor-pointer text-white text-sm font-medium justify-center border bg-lime-950 px-5 py-2.5 rounded-lg border-solid border-lime-950">
                Create new item
              </div>
            }
            title="Create new item"
            setCallBack={setAddMarketCallBack}
            refetch={() => {}}
          >
            <AddMarketplaceItem callBack={addMarketCallBack} />
          </Modal>
        ) : (
          <></>
        )}
      </div>
      <div className="bg-white flex flex-wrap gap-4 w-full mt-6 rounded-xl max-md:max-w-full">
        {marketplaceData?.length > 0 ? (
          marketplaceData.map((product: Product) => (
            <Modal
              key={product.id}
              modalButton={<Card {...product} />}
              title={""}
              setCallBack={() => {}}
              refetch={() => {}}
              buttonWrapperClass="w-full max-w-xs "
            >
              <ViewProduct {...product} balance={balance} />
            </Modal>
          ))
        ) : (
          <div className="grid place-content-center w-full text-2xl h-[60vh]">
            <p>No products in the Marketplace</p>
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-5 mt-8 pr-2.5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-sm my-auto">Results 1 - 20 out of 90</div>
        <div className="justify-center items-start flex gap-3 pl-2">
          <MdNavigateBefore />
          <p>Page</p>
          <p className="text-sm self-start">Page 1</p>
          <p className="text-sm underline self-start">2</p>
          <p className="text-sm underline self-start">3</p>
          <p className="text-sm underline self-start">4</p>
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
