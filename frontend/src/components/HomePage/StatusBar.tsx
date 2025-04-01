import React from "react";
import { StatusBarIcons } from "./Icons";

export const StatusBar: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 pt-3 pb-2 pr-0 bg-white">
      <time className="text-lg text-black font-[590]">9:41</time>
      <div className="flex gap-2 items-center">
        <StatusBarIcons />
      </div>
    </header>
  );
};
