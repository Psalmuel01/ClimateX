import { formatEther } from "ethers/lib/utils";
import { Product } from "./Marketplace";
import { useContext } from "react";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContractWrite } from "@thirdweb-dev/react";
import toast from "react-hot-toast";

const ViewProduct = ({
  image,
  name,
  description,
  price,
  availableItems,
  sold,
  id,
}: Product) => {
  const { marketplaceContract } = useContext(ContractContext);

  const { mutateAsync: buyProduct } = useContractWrite(
    marketplaceContract,
    "buyProduct"
  );

  const buy = async () => {
    toast.loading("Buying...");
    try {
      await buyProduct?.({ args: [Number(id), 1] });
      toast.dismiss();
      toast.success("Bought successfully");
    } catch (err) {
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="md:flex gap-6 md:max-w-3xl m-2">
      <div className="flex-1">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 grid gap-1">
        <div className="text-zinc-800 text-lg font-medium">{name}</div>
        <div className="text-lime-950 text-sm">{description}</div>
        <div className="text-zinc-800 text-sm">
          Available: {Number(availableItems)} left
        </div>
        <div className="text-zinc-800 text-sm">{Number(sold)} items sold</div>
        <div className="">Price: {formatEther(price)} C</div>

        <button
          className="cursor-pointer text-white text-sm font-medium justify-center border bg-lime-950  hover:bg-lime-700 px-5 py-1 rounded-lg border-solid border-lime-950"
          onClick={buy}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
