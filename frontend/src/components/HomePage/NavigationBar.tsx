import React from "react";
import { HomeIcon, MenuIcon } from "./Icons";
import { Link } from "react-router-dom";

interface NavigationBarProps {
  title?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ title }) => {
  return (
    <nav className="relative flex justify-between items-center px-4 w-full h-[58px] bg-[linear-gradient(180deg,#0098C9_0%,#0085B1_9.51%,#007399_37%,#007CA5_55.5%,#008DBB_100%)]">
      <Link to="/HomePage">
        <button
          aria-label="Home"
          className="p-2 rounded-md focus:outline-none flex items-center justify-center"
        >
          <HomeIcon />
        </button>
      </Link>

      {title && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-medium text-center leading-none">
        {title}
      </span>
      
      )}

      <Link to="/Menu">
        <button
          aria-label="Menu"
          className="p-2 rounded-md focus:outline-none flex items-center justify-center"
        >
          <MenuIcon />
        </button>
      </Link>
    </nav>
  );
};
