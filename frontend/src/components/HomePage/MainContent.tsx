import React from "react";
import { ActionButtons } from "./ActionButtons";

export const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f87c5c6de397070c6601372d82ed474af940da5c"
        alt="Youth Activities"
        className="w-full h-[220px] rounded-[6px] object-cover mt-[10px]"
      />
      <h1 className="mt-5 text-2xl text-center">Youth Activities</h1>
      <section className="p-6 mt-2.5 text-sm leading-6 border border-black border-solid">
        Youth activities lie at the foundation of a youth's testimony. By
        planning activities in one of the four categories in the For Strength of
        Youth, Youth will be able to grow Spiritually, Socially, Physically, and
        Intellectually.
      </section>
      <ActionButtons />
    </main>
  );
};
