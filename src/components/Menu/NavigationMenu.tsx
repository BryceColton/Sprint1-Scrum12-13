"use client";
import * as React from "react";
import { StatusBar } from "./StatusBar";
import { BackButton } from "./BackButton";
import { MenuItems } from "./MenuItems";
import { BottomIndicator } from "./BottomIndicator";

export const NavigationMenu: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poly&display=swap"
        rel="stylesheet"
      />
      <main className="relative w-full h-screen bg-white">
        <StatusBar />
        <nav className="relative w-full bg-cyan-600 border-solid border-[3px] border-zinc-400 h-[calc(100vh_-_50px)]">
          <BackButton />
          <MenuItems />
          <BottomIndicator />
        </nav>
      </main>
    </>
  );
};


