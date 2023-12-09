import { Product } from "./Marketplace";

const ViewProduct = ({
  image,
  name,
  description,
  price,
  availableItems,
  ...product
}: Product) => {
  console.log({ product });
  return (
    <div className="flex gap-2 w-[700px]">
      <div className="flex-1">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default ViewProduct;
