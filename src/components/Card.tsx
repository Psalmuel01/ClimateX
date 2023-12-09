import { Product } from "../pages/App/components/Marketplace";

const Card = ({ ...product }: Product) => {
  return (
    <div className=" w-full border rounded-lg overflow-hidden shadow-sm transition hover:shadow-md hover:scale-[1.02]">
      <div className="h-44">
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-none items-start">
        <div className="p-4 h-full">
          <div className="text-zinc-800 text-lg font-medium">
            {product.name}
          </div>
          <div className="text-lime-950 text-sm mt-3.5 truncate">
            {product.description}
          </div>
        </div>
        <div className="bg-zinc-100 min-h-[1px] w-full " />
        <div className="flex w-full px-4 items-center justify-between gap-5 my-4">
          <div className="text-zinc-800 text-sm grow my-auto">
            {Number(product.availableItems)} left
          </div>
          <div className="text-zinc-800 text-sm border border-[#333] shadow-sm px-3 py-1 rounded-3xl ">
            {Number(product.price) / 10 ** 18} C
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
