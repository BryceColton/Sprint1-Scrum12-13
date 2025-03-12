"use client";
import React, { useState } from "react";
import { IconHome, IconMenu2 } from "@tabler/icons-react";

export function SearchHeader() {
  const [searchText, setSearchText] = useState("");

  return (
    <header className="flex items-center p-4 text-white bg-cyan-600 max-sm:p-3">
      <IconHome className="mr-3 text-2xl text-white" />
      <div className="relative flex-1 mx-3 my-0">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Activities"
          className="py-2 pr-8 pl-3 w-full text-base rounded border-[none] max-sm:text-sm text-black"
          aria-label="Search Activities"
        />
        {searchText && (
          <button
            onClick={() => setSearchText("")}
            className="absolute right-2 top-2/4 text-xl -translate-y-2/4 cursor-pointer text-stone-500"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <IconMenu2 className="text-2xl text-white cursor-pointer" />
    </header>
  );
}
