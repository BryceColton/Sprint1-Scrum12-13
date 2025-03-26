"use client";
import { StatusBar } from "../HomePage/StatusBar";
import { NavigationBar } from "./NavigationBar";
import { ActivityGrid } from "../ActivityDisplayed/ActivityGrid";
import { FloatingActionButton } from "../Calendar/FloatingActionButton";
import { BottomIndicator } from "./BottomIndicator";

export const ActivityBrowser = () => {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <StatusBar />
      <div className="mt-12">
        <NavigationBar />
      </div>
      <ActivityGrid />
      <FloatingActionButton />
      <BottomIndicator />
    </main>
  );
};

export default ActivityBrowser;
