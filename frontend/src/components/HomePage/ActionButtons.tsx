import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { PlusIcon } from "./Icons";

const buttonBaseClass =
  "w-full text-sm text-white rounded-md border border-black border-solid bg-[linear-gradient(180deg,#017BA3_0%,#025E7C_52%,#017BA3_100%)] h-[54px]";

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 w-full max-w-[266px]">
      {/* Wrap buttons with Link component */}
      <Link to="/calendar">
        <button className={buttonBaseClass}>Schedule an Activity</button>
      </Link>

      <div className="relative">
        <Link to="/blog">
          <button className={buttonBaseClass}>
            <span>Blog of Activities</span>
          </button>
        </Link>
        
      </div>

      <Link to="/calendar">
        <button className={buttonBaseClass}>Calendar</button>
      </Link>

      <Link to="/activities">
        <button className={buttonBaseClass}>Activities</button>
      </Link>
    </div>
  );
};
