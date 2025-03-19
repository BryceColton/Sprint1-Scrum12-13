"use client";
import * as React from "react";
import { StatusBar } from "./StatusBar";
import { BackButton } from "./BackButton";
import { MenuItems } from "./MenuItems";
import { BottomIndicator } from "./BottomIndicator";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavigationMenu: React.FC = () => {
    const navigate = useNavigate(); // Initialize navigation

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poly&display=swap"
        rel="stylesheet"
      />
      <main className="relative w-full h-screen bg-white">
        <StatusBar />
        <nav className="relative w-full bg-cyan-600 border-solid border-[3px] border-zinc-400 h-[calc(100vh_-_50px)]">
        <button onClick={() => navigate(-1)}> {/* Go back one page */}
            <BackButton />
        </button>          <MenuItems />
          <BottomIndicator />
        </nav>
      </main>
    </>
  );
};


