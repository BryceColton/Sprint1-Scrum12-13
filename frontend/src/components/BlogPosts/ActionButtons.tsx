import React from "react";
import { useNavigate } from "react-router-dom";

const buttonBaseClass =
  "w-full text-sm text-white rounded-md border border-black border-solid bg-[linear-gradient(180deg,#017BA3_0%,#025E7C_52%,#017BA3_100%)] h-[54px]";

export const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-2">
      <button aria-label="Like">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/829126b7144f9c6e16d8ffb85bf5a8a2759c4cc1f3d696d4edac09e21491fe97?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Like"
          className="w-6 h-6"
        />
      </button>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
      </div>
      <button aria-label="Share">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/621af8d6f6b29f2a622d0226173181b94ac7450c5eebec24df5b65bf36f4890f?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Share"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};
