"use client";
import { useState } from "react";
import { StatusBar } from "../HomePage/StatusBar";
import { NavigationBar } from "./NavigationBar";
import { ActivityGrid } from "../ActivityDisplayed/ActivityGrid";
import { FloatingActionButton } from "./FloatingActionButton"; // Verify this import path
import { BottomIndicator } from "./BottomIndicator";

export const ActivityBrowser = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <main className="flex flex-col bg-white min-h-screen pb-24">
      {" "}
      {/* Increased pb-20 to pb-24 */}
      <div className="mt-12">{/* <NavigationBar /> */}</div>
      <ActivityGrid showAddForm={showAddForm} setShowAddForm={setShowAddForm} />
      <FloatingActionButton onClick={() => setShowAddForm(true)} />
      <BottomIndicator />
      {/* checking if github working */}
    </main>
  );
};
