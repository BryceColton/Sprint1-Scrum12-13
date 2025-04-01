// CalendarView.tsx
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css'; // For your circle highlight style

type CalendarActivity = {
  category: string;
  scheduledTime: string;
  location: string;
  description: string;
};

const CalendarView = () => {
  const [activities, setActivities] = useState<CalendarActivity[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 👇 Fetch activities once when component mounts
  useEffect(() => {
    const fetchActivities = async () => {
      const res = await fetch('/api/scheduledActivities');
      const data = await res.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  // 👇 Filter events for the selected day
  const selectedDayActivities = activities.filter(
    (a) => new Date(a.scheduledTime).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="calendar-container">
      {/* CALENDAR */}
      <Calendar
        onClickDay={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) => {
          const hasActivity = activities.some(
            (a) => new Date(a.scheduledTime).toDateString() === date.toDateString()
          );
          return hasActivity ? 'highlight-circle' : null;
        }}
      />

      {/* EVENT LIST FOR SELECTED DATE */}
      <div className="event-list">
        {selectedDayActivities.length === 0 ? (
          <p>No activities scheduled for this day.</p>
        ) : (
          selectedDayActivities.map((a, i) => (
            <div key={i} className="event-card">
              <p><strong>Category:</strong> {a.category}</p>
              <p><strong>Time:</strong> {new Date(a.scheduledTime).toLocaleTimeString()}</p>
              <p><strong>Location:</strong> {a.location}</p>
              <p><strong>Description:</strong> {a.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CalendarView;

