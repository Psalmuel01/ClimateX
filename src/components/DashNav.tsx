import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import climate from "../assets/climate.png";

import { useState } from "react";

const navigation = [
  { name: "Home", to: "/app" },
  { name: "Impact", to: "impact" },
  { name: "Marketplace", to: "marketplace" },
  { name: "Events", to: "events" },
];

const DashNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md pt-5"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <FiAlignLeft className="h-6 w-16" aria-hidden="true" />
      </button>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="text-[#070B12] fixed inset-y-0 left-0 z-50 w-1/2 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-3xl bg-clip-text max-md:text-2xl max-sm:text-xl"
            >
              <img src={climate} className="w-2/3" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiX
                className="text-red-400 cursor-pointer h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link to="/" className="py-6 text-sm font-semibold">
                Landing
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default DashNav;
