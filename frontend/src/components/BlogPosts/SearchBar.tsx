"use client";
import React from "react";

export const SearchBar: React.FC = () => {
  return (
    <nav className="flex gap-5 justify-between items-center px-2.5 py-1 w-full text-base leading-none text-stone-900">
      <button aria-label="Menu">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44dbb639a82298ec957be57c1fee8accf953ff7a7f4365d1f4ec5378acb38560?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Menu"
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </button>
      <div className="flex overflow-hidden gap-2 items-center self-stretch px-4 py-3 bg-white rounded-full border border-solid border-zinc-300 min-h-10">
        <input
          type="search"
          placeholder="Search Activities"
          className="flex-1 shrink self-stretch my-auto basis-0 outline-none"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12d35a344a22193abbd6967323e06681ded55706ceaed5c38ea31dce6653538?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Search"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </div>
      <button aria-label="Profile">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/192c686a5a6088ff0165ac4e3fd98b644d897749c3a2670d30cc3c926c58d53f?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
          alt="Profile"
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </button>
    </nav>
  );
};
