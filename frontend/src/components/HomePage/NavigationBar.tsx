import React from "react";
import { HomeIcon, MenuIcon, CloseIcon } from "./Icons";
import { Link } from "react-router-dom";

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-2.5 w-full bg-[linear-gradient(180deg,#0098C9_0%,#0085B1_9.51%,#007399_37%,#007CA5_55.5%,#008DBB_100%)] h-[47px]">
      <button aria-label="Home" className="focus:outline-none">
        <HomeIcon />
      </button>
      <div className="flex-1 mx-2.5">
        <div className="flex gap-2 items-center px-4 py-2 bg-white rounded-full">
          <span className="text-base text-stone-900">Search Activities</span>
          <button aria-label="Clear search" className="focus:outline-none">
            <CloseIcon />
          </button>
        </div>
      </div>
      <button aria-label="Menu" className="focus:outline-none">
        <Link to="/Menu"><MenuIcon /></Link>
      </button>
    </nav>
  );
};
