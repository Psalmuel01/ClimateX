import NavButton from "./NavButton";
import climate from "../assets/climate.png";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header>
      <nav
        className="flex items-center justify-between px-8 py-6 lg:px-20 lg:py-5"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <Link
            to="/"
            className="text-3xl major-flex gap-2 bg-clip-text max-md:text-2xl max-sm:text-xl"
          >
            <img src={climate} alt="" />
          </Link>
          <div className="flex lg:hidden">
            <NavButton />
          </div>
          <div className="items-start self-center hidden lg:flex w-[521px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
            <div className="text-orange-400 text-xl font-bold self-stretch">
              About
            </div>
            <div className="text-xl font-bold self-stretch">FAQs</div>
            <div className="text-xl font-bold self-stretch">Resources</div>
          </div>
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
