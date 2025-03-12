"use client";
import { HomeIcon, MenuIcon, CloseIcon } from "./Icons";

export const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center px-2.5 w-full bg-[linear-gradient(180deg,#0098C9_0%,#0085B1_9.51%,#007399_37%,#007CA5_55.5%,#008DBB_100%)] h-[47px]">
      <button aria-label="Home" className="p-2">
        <HomeIcon />
      </button>
      <div className="flex gap-2 items-center px-4 py-3 h-10 bg-white rounded-full border border-stone-900 w-[239px]">
        <span className="flex-1 text-base leading-4 text-stone-900">
          Search Activities
        </span>
        <button aria-label="Clear search">
          <CloseIcon />
        </button>
      </div>
      <button aria-label="Menu" className="p-2">
        <MenuIcon />
      </button>
    </nav>
  );
};
