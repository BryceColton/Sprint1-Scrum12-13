import { useMemo } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useCalendarData } from "../../context/CalendarDataContext";
import { isSameDay, parseISO } from "date-fns";

export function CalendarGrid() {
  const { activities, selectedDate, setSelectedDate } = useCalendarData();

  const activityDates = useMemo(() => {
    return activities.map((activity) => parseISO(activity.scheduledTime));
  }, [activities]);

  const modifiers = {
    hasEvent: activityDates,
    selected: selectedDate ? [selectedDate] : [],
  };

  const modifiersClassNames = {
    hasEvent: "border-2 border-blue-800 rounded-full",
    selected: "outline outline-blue-400",
  };

  return (
    <section>

      <DayPicker
  mode="single"
  selected={selectedDate ?? undefined}
  onSelect={(date) => setSelectedDate(date!)}
  modifiers={modifiers}
  modifiersClassNames={modifiersClassNames}
  showOutsideDays
  className="text-black"
/>

    </section>
  );
}
