import React from "react";

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-10 mt-2 w-full">
      <button aria-label="Like">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/829126b7144f9c6e16d8ffb85bf5a8a2759c4cc1f3d696d4edac09e21491fe97?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Like"
          className="object-contain shrink-0 w-8 aspect-square"
        />
      </button>
      <div className="flex flex-1 gap-2 self-start">
        <div className="flex shrink-0 w-2 h-2 rounded-full bg-zinc-300" />
        <div className="flex shrink-0 w-2 h-2 rounded-full bg-zinc-300" />
        <div className="flex shrink-0 w-2 h-2 rounded-full bg-zinc-300" />
      </div>
      <button aria-label="Share">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/621af8d6f6b29f2a622d0226173181b94ac7450c5eebec24df5b65bf36f4890f?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Share"
          className="object-contain shrink-0 w-8 aspect-square"
        />
      </button>
    </div>
  );
};
