import { useCalendarData } from "../../context/CalendarDataContext";
import { isSameDay, parseISO } from "date-fns";

export function ScheduledActivityList() {
  const { activities, selectedDate } = useCalendarData();

  const filtered = selectedDate
    ? activities.filter((a) => isSameDay(parseISO(a.scheduledTime), selectedDate))
    : [];

  if (!selectedDate) return null;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">
        Activities on {selectedDate.toLocaleDateString()}
      </h3>
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">No scheduled activities.</p>
      ) : (
        <ul className="space-y-2">
          {filtered.map((activity) => (
            <li
              key={activity.scheduleId}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <p>
                <strong>Activity:</strong> {activity.activityName}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {new Date(activity.scheduledTime).toLocaleTimeString()}
              </p>
              <p>
                <strong>Location:</strong> {activity.location}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
