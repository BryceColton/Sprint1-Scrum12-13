// src/context/CalendarDataContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ScheduledActivity {
  scheduleId: number;
  activityName: string;
  scheduledBy: number;
  scheduledTime: string;
  location: string;
  userId: number;
  user: any | null;
}

interface CalendarContextType {
  activities: ScheduledActivity[];
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendarData = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarData must be used inside a CalendarDataProvider");
  }
  return context;
};

export const CalendarDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activities, setActivities] = useState<ScheduledActivity[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch("https://localhost:5000/api/ScheduledActivities")
      .then((res) => res.json())
      .then(setActivities)
      .catch((err) => console.error("Failed to load activities:", err));
  }, []);

  return (
    <CalendarContext.Provider value={{ activities, selectedDate, setSelectedDate }}>
      {children}
    </CalendarContext.Provider>
  );
};

