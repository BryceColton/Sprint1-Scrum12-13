"use client";
import { CloseIcon } from "./Icons";
import Link from "next/link";

interface ActivityDetailsModalProps {
  activity: {
    title: string;
    category: string;
    imageUrl?: string;
    description?: string;
  };
  onClose: () => void;
}

export const ActivityDetailsModal = ({
  activity,
  onClose,
}: ActivityDetailsModalProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      {/* Semi-transparent overlay removed */}
      <div
        className="bg-white p-6 rounded-lg w-full max-w-sm relative mx-4 border border-gray-200 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col items-center gap-4">
          {activity.imageUrl ? (
            <img
              src={activity.imageUrl}
              alt={activity.title}
              className="w-[150px] h-[150px] border border-gray-200 shadow-md mb-4 object-cover rounded-lg"
            />
          ) : (
            <div className="w-[150px] h-[150px] border border-gray-200 shadow-md mb-4 bg-gray-100 rounded-lg" />
          )}

          <h2 className="text-xl font-bold text-center">{activity.title}</h2>
          <p className="text-sm text-gray-600">Category: {activity.category}</p>

          <div className="w-full p-4 bg-gray-50 rounded-lg mb-4">
            {activity.description ? (
              <p className="text-base text-center">{activity.description}</p>
            ) : (
              <p className="text-base text-center text-gray-500">
                No additional description available.
              </p>
            )}
          </div>

          {/* Schedule Button with improved styling */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-black font-medium py-2 px-4 rounded-lg transition-colors">
            Schedule This Activity
          </button>
        </div>
      </div>
    </div>
  );
};
