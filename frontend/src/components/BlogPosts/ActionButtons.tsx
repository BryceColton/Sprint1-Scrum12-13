import React from "react";
import { useNavigate } from "react-router-dom";

const buttonBaseClass =
  "w-full text-sm text-white rounded-md border border-black border-solid bg-[linear-gradient(180deg,#017BA3_0%,#025E7C_52%,#017BA3_100%)] h-[54px]";

export const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 mt-5 w-full max-w-[266px]">
      <button className={buttonBaseClass} onClick={() => navigate("/scheduleForm")}>
        Schedule an Activity
      </button>

      <div className="relative">
        <button className={buttonBaseClass} onClick={() => navigate("/blogActivites")}>
          <span>Blog of Activities</span>
        </button>
      </div>

      <button className={buttonBaseClass} onClick={() => navigate("/calendar")}>
        Calendar
      </button>

      <button className={buttonBaseClass} onClick={() => navigate("/activities")}>
        Activities
      </button>
    </div>
  );
};
