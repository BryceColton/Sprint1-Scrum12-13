import React, { useState } from "react";

interface FormData {
  activityId: string;
  scheduledBy: string;
  scheduledTime: string;
  location: string;
  userId: string; // <-- added userId
}

export function ScheduleActivityForm() {
  const [formData, setFormData] = useState<FormData>({
    activityId: "",
    scheduledBy: "",
    scheduledTime: "",
    location: "",
    userId: "", // <-- initialized here
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("https://localhost:5000/api/ScheduledActivities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          activityId: parseInt(formData.activityId),
          scheduledBy: parseInt(formData.scheduledBy),
          scheduledTime: formData.scheduledTime,
          location: formData.location,
          userId: parseInt(formData.userId), // <-- send userId to backend
        }),
      });

      if (response.ok) {
        setMessage("Activity scheduled successfully!");
        setFormData({
          activityId: "",
          scheduledBy: "",
          scheduledTime: "",
          location: "",
          userId: "",
        });
      } else {
        setMessage("Failed to schedule activity.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Schedule Activity</h2>
      {message && <p className="text-center text-sm text-cyan-700 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="number"
          name="activityId"
          placeholder="Activity ID"
          value={formData.activityId}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="scheduledBy"
          placeholder="User ID (Scheduled By)"
          value={formData.scheduledBy}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="datetime-local"
          name="scheduledTime"
          value={formData.scheduledTime}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
