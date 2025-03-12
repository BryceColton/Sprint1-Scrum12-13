"use client";
import * as React from "react";
import { StatusBar } from "../Home Page/StatusBar";
import { SearchHeader } from "../Login/SearchHeader";
import { WardCalendarDropdown } from "./WardCalendarDropdown";
import { CalendarGrid } from "./CalendarGrid";
import { TimeSelector } from "./TimeSelector";
import { FloatingActionButton } from "./FloatingActionButton";
import { BottomSheetIndicator } from "./BottomSheetIndicator";

export default function CalendarView() {
  return (
    <main className="w-full bg-white min-h-[screen]">
      <StatusBar />
      <SearchHeader />
      <section className="px-16 mt-10">
        <WardCalendarDropdown />
      </section>
      <section className="px-4 mt-12">
        <div className="p-4 border border-black border-solid">
          <CalendarGrid />
          <TimeSelector />
        </div>
      </section>
      <FloatingActionButton />
      <BottomSheetIndicator />
    </main>
  );
}
