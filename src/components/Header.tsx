import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import climate from "../assets/climate.png";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between" aria-label="Global">
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
            <div className="text-lg">About</div>
            <div className="text-lg">FAQs</div>
            <div className="text-lg">Resources</div>
          </div>
          <div className="max-lg:hidden">
            <ConnectWallet />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
