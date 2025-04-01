"use client";
import React from "react";

export const SearchBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-2 w-full bg-white">
      <button aria-label="Home">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44dbb639a82298ec957be57c1fee8accf953ff7a7f4365d1f4ec5378acb38560?apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Home"
          className="w-6 h-6"
        />
      </button>

      <button aria-label="Menu">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/192c686a5a6088ff0165ac4e3fd98b644d897749c3a2670d30cc3c926c58d53f?apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Menu"
          className="w-6 h-6"
        />
      </button>
    </nav>
  );
};