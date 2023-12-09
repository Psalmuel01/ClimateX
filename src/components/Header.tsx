import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <Link to="/">
            <img src={logo} className="w-3/4 max-md:w-2/3" alt="" />
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
