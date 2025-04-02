// src/components/Calendar/CalendarView.tsx

import * as React from "react";
import { StatusBar } from "../HomePage/StatusBar";
import { SearchHeader } from "../Login/SearchHeader";
import { WardCalendarDropdown } from "./WardCalendarDropdown";
import { CalendarGrid } from "./CalendarGrid";
import { ScheduledActivityList } from "./ScheduledActivityList";
import { TimeSelector } from "./TimeSelector";
import { FloatingActionButton } from "./FloatingActionButton";
import { BottomSheetIndicator } from "./BottomSheetIndicator";
import { CalendarDataProvider } from "../../context/CalendarDataContext"; // <-- Make sure it's imported

export function CalendarView() {
  return (
    <CalendarDataProvider>
      <main className="w-full bg-white min-h-[screen]">
        {/* <StatusBar />
        <SearchHeader /> */}

        <section className="px-16 mt-10">
          <WardCalendarDropdown />
        </section>

        <section className="px-4 mt-12">
          <div className="p-4 border border-black border-solid">
            <CalendarGrid /> {/* ✅ now safely inside the provider */}
            <ScheduledActivityList />
            <TimeSelector />
          </div>
        </section>

        <FloatingActionButton />
        <BottomSheetIndicator />
      </main>
    </CalendarDataProvider>
  );
}
