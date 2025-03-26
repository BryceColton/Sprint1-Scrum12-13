"use client";
import React from "react";
import { StatusBar } from "./StatusBar";
import { NavigationBar } from "./NavigationBar";
import { MainContent } from "./MainContent";

const InputDesign: React.FC = () => {
  return (
    <div className="flex flex-col bg-white min-h-[screen]">
      <StatusBar />
      <NavigationBar />
      <MainContent />
      <footer className="flex justify-center px-32 pt-5 pb-2 mt-auto">
        <div className="w-36 bg-black h-[5px] rounded-[100px]" />
      </footer>
    </div>
  );
};

export default InputDesign;
