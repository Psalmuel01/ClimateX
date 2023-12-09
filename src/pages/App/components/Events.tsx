import { BsCalendar2Event } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import next from "../../../assets/next.png";

const Events = () => {
  return (
    <div className="justify-center items-center bg-white flex flex-col pt-3 px-3">
      <div className="justify-between flex w-full gap-5">
        <div className="items-center flex justify-between gap-4">
          <BsCalendar2Event size={24} />
          <div className="text-neutral-800 text-2xl font-bold my-auto">
            Events
          </div>
        </div>
        <a
          href="#"
          className="text-lime-950 text-xs font-medium underline my-auto"
        >
          View all
        </a>
      </div>
      <div className="bg-black bg-opacity-10 flex justify-between gap-5 mt-2 pl-2.5 pr-9 py-2.5 rounded-3xl">
        <div className="text-white text-xs font-bold justify-center shadow-sm bg-lime-950 px-6 py-2.5 rounded-xl">
          Online
        </div>
        <div className="text-black text-xs font-bold self-center">Offline</div>
      </div>
      <div className="flex flex-col w-full justify-between mt-3 py-2.5">
        <div className="flex w-full justify-between">
          <div className="flex justify-between gap-7">
            <img src={img1} className="object-contain" />
            <div className="flex flex-col mt-1.5">
              <div className="text-lime-950 font-bold">Tree planting</div>
              <div className="text-zinc-800 text-sm mt-2">
                3rd mainland bridge
              </div>
              <div className="text-zinc-800 text-xs mt-1">4th Nov, 2024</div>
            </div>
          </div>
          <img src={next} className="object-contain" />
        </div>
        <div className="flex w-full justify-between gap-5 mt-5">
          <div className="flex justify-between gap-7">
            <img src={img2} className="object-contain" />
            <div className="flex flex-col mt-1.5">
              <div className="text-lime-950 font-bold">Tree planting</div>
              <div className="text-zinc-800 text-sm mt-2">
                3rd mainland bridge
              </div>
              <div className="text-zinc-800 text-xs mt-1">4th Nov, 2024</div>
            </div>
          </div>
          <img
            src={next}
            className="object-contain object-center w-5 my-auto"
          />
        </div>
        <div className="flex w-full justify-between gap-5 mt-5">
          <div className="flex justify-between gap-7">
            <img src={img3} className="object-contain" />
            <div className="flex flex-col mt-1.5">
              <div className="text-lime-950 font-bold">Tree planting</div>
              <div className="text-zinc-800 text-sm mt-2">
                3rd mainland bridge
              </div>
              <div className="text-zinc-800 text-xs mt-1">4th Nov, 2024</div>
            </div>
          </div>
          <img
            src={next}
            className="object-contain object-center w-5 my-auto"
          />
        </div>
        <div className="justify-between flex w-full gap-5 mt-5">
          <div className="flex justify-between gap-7">
            <img src={img4} className="object-contain" />
            <div className="flex flex-col mt-1.5">
              <div className="text-lime-950 font-bold">Waste recycling</div>
              <div className="text-zinc-800 text-sm mt-2">
                3rd mainland bridge
              </div>
              <div className="text-zinc-800 text-xs mt-1">4th Nov, 2024</div>
            </div>
          </div>
          <img
            src={next}
            className="object-contain object-center w-5 my-auto"
          />
        </div>
      </div>
      <div className="justify-between self-center flex w-full gap-5 mt-6">
        <div className="flex justify-between gap-4">
          <FaMapMarkerAlt />
          <div className="text-neutral-800 text-2xl font-bold my-auto">
            Live map
          </div>
        </div>
        <div className="text-lime-950 text-xs font-medium underline my-auto">
          View all
        </div>
      </div>
      <div className="w-full mt-4">
        <iframe
          title="iframe"
          height="400"
          className="rounded-2xl w-full"
          src="https://maps.google.com/maps?width=408&amp;height=340&amp;hl=en&amp;q=Ikeja,%20Lagos+(ClimateX)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure distance on map
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Events;
