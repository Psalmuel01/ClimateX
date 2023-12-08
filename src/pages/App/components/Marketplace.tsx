import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Card from "../../../components/Card";

const Marketplace = () => {
  return (
    <div className="justify-center flex flex-col">
      <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-2xl font-medium">Market place</div>
        <div className="text-white text-sm font-medium justify-center border bg-lime-950 px-5 py-2.5 rounded-lg border-solid border-lime-950">
          Create new item
        </div>
      </div>
      <div className="bg-white flex flex-wrap justify-between w-full mt-6 rounded-xl max-md:max-w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
