import unsplash1 from "../../../assets/unsplash1.png";
import unsplash2 from "../../../assets/unsplash2.png";
import unsplash3 from "../../../assets/unsplash3.png";
import unsplash4 from "../../../assets/unsplash4.png";
import unsplash5 from "../../../assets/unsplash5.png";
import unsplash6 from "../../../assets/unsplash6.png";
import unsplash7 from "../../../assets/unsplash7.png";
import unsplash8 from "../../../assets/unsplash8.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Card from "../../../components/Card";
import AddMarketplaceItem from "./AddMarketplaceItem";
import { ContractContext } from "../../../contexts/ContractContext";
import { useContext, useState } from "react";
import Modal from "./Modal";

const Marketplace = () => {
  const cardData = [
    {
      src: unsplash1,
      title: "The Holy Grail",
      type: "Fixed price",
    },
    {
      src: unsplash2,
      title: "Mirror Glass Effect",
      type: "Open bidding",
    },
    {
      src: unsplash3,
      title: "Neon in Life",
      type: "Fixed price",
    },
    {
      src: unsplash4,
      title: "Oil Source",
      type: "Fixed price",
    },
    {
      src: unsplash5,
      title: "World Surface",
      type: "Open bidding",
    },
    {
      src: unsplash6,
      title: "Infinity Door",
      type: "Fixed price",
    },
    {
      src: unsplash7,
      title: "Biconditional Effect",
      type: "Fixed price",
    },
    {
      src: unsplash8,
      title: "Motion View",
      type: "Open bidding",
    },
  ];

  const { isAdmin } = useContext(ContractContext);
  const [addMarketCallBack, setAddMarketCallBack] = useState<() => void>(
    () => () => {}
  );

  return (
    <div className="justify-center flex flex-col">
      <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-2xl max-md:text-xl max-md:ml-8 font-bold">
          Market place
        </div>
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
      <div className="bg-white flex flex-wrap justify-between w-full mt-6 rounded-xl max-md:max-w-full">
        {cardData.map((chain, index) => (
          <Card key={index} {...chain} />
        ))}
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
