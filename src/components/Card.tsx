const Card = ({
  src,
  title,
  type,
}: {
  src: string;
  title: string;
  type: string;
}) => {
  return (
    <div className="flex flex-col md:w-[24%] mb-5 max-md:mx-auto border rounded-lg">
      <img src={src} alt="" />
      <div className="bg-white flex w-full flex-col py-4 rounded-none items-start">
        <div className="flex flex-col ml-5 max-md:ml-2.5">
          <div className="text-zinc-800 text-lg font-medium">{title}</div>
          <div className="text-lime-950 text-sm mt-3.5">Pixart Motion</div>
        </div>
        <div className="bg-zinc-100 min-h-[1px] w-full mt-16 max-md:mt-10" />
        <div className="self-center flex w-full max-w-[215px] items-center justify-between gap-5 mt-4 px-5">
          <div className="text-zinc-800 text-sm grow my-auto">{type}</div>
          <div className="text-zinc-800 text-sm border border-[color:var(--Black,#333)] shadow-sm aspect-[2.5833333333333335] justify-center px-3 py-1 rounded-3xl border-solid">
            240C*
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
