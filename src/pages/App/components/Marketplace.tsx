import unsplash1 from "../../../assets/unsplash1.png";
import unsplash2 from "../../../assets/unsplash2.png";
import unsplash3 from "../../../assets/unsplash3.png";
import unsplash4 from "../../../assets/unsplash4.png";
import unsplash5 from "../../../assets/unsplash5.png";
import unsplash6 from "../../../assets/unsplash6.png";
import unsplash7 from "../../../assets/unsplash7.png";
import unsplash8 from "../../../assets/unsplash8.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Marketplace = () => {
  return (
    <div className="justify-center flex flex-col">
      <div className="flex w-full justify-between gap-5 px-5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-2xl font-medium">Market place</div>
        <div className="text-white text-sm font-medium justify-center border bg-lime-950 px-5 py-2.5 rounded-lg border-solid border-lime-950">
          Create new item
        </div>
      </div>
      <div className="bg-white flex w-full flex-col mt-8 px-5 py-5 rounded-xl max-md:max-w-full">
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
              <img src={unsplash1} alt="" />
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img src={unsplash2} alt="" />
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img src={unsplash3} alt="" />
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img src={unsplash4} alt="" />
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col mx-auto py-4 rounded-none items-start max-md:mt-6">
                <div className="flex flex-col ml-5 max-md:ml-2.5">
                  <div className="text-lg font-medium">The Holy Grail</div>
                  <div className="text-sm mt-3.5">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[215px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Fixed price</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm justify-center px-3 py-1 rounded-3xl border-solid">
                    240C*
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col items-center mx-auto py-4 rounded-none max-md:mt-6">
                <div className="flex flex-col pl-5 pr-20 items-start max-md:pr-5">
                  <div className="text-lg font-medium">Mirror Glass Efect</div>
                  <div className="text-sm mt-4">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[215px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Open bidding</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm justify-center px-3 py-1 rounded-3xl border-solid">
                    240C*
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col mx-auto py-4 rounded-none items-start max-md:mt-6">
                <div className="flex flex-col ml-5 max-md:ml-2.5">
                  <div className="text-lg font-medium">Neon in Life</div>
                  <div className="text-sm mt-4">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[215px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Fixed price</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm justify-center px-3 py-1 rounded-3xl border-solid">
                    240C*
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col mx-auto py-4 rounded-none items-start max-md:mt-6">
                <div className="flex flex-col ml-5 max-md:ml-2.5">
                  <div className="text-lg font-medium">Oil Source</div>
                  <div className="text-sm mt-4">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[215px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Fixed price</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm justify-center px-3 py-1 rounded-3xl border-solid">
                    240C*
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
              <img src={unsplash5} alt="" />
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img src={unsplash6} alt="" />
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img src={unsplash7} alt="" />
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img src={unsplash8} alt="" />
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col mx-auto py-4 rounded-none items-start max-md:mt-6">
                <div className="flex flex-col ml-5 max-md:ml-2.5">
                  <div className="text-lg font-medium">World Surface</div>
                  <div className="text-sm mt-4">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[215px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Open bidding</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm justify-center px-3 py-1 rounded-3xl border-solid">
                    240C*
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col mx-auto py-4 rounded-none items-start max-md:mt-6">
                <div className="flex flex-col ml-5 max-md:ml-2.5">
                  <div className="text-lg font-medium">Infinity Door</div>
                  <div className="text-sm mt-3.5">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[219px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Fixed price</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm aspect-[2.9583333333333335] justify-center px-3 py-1 rounded-3xl border-solid">
                    2040C*
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col items-center mx-auto py-4 rounded-none max-md:mt-6">
                <div className="flex flex-col pl-5 pr-20 max-md:pr-5">
                  <div className="text-lg font-medium">
                    Bi-conditional Effect
                  </div>
                  <div className="text-sm mt-4">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[219px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Fixed price</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm aspect-[2.9166666666666665] justify-center px-3 py-1 rounded-3xl border-solid">
                    3440C*
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col mx-auto py-4 rounded-none items-start max-md:mt-6">
                <div className="flex flex-col ml-5 max-md:ml-2.5">
                  <div className="text-lg font-medium">Motion view</div>
                  <div className="text-sm mt-4">Pixart Motion</div>
                </div>
                <div className="bg-zinc-100 h-px mt-16 max-md:mt-10" />
                <div className="flex w-[215px] max-w-full items-center justify-between gap-5 mt-4">
                  <div className="text-sm my-auto">Open bidding</div>
                  <div className="text-sm border border-[color:var(--Black,#333)] shadow-sm justify-center px-3 py-1 rounded-3xl border-solid">
                    240C*
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
