"use client";
import { useState } from "react";
import { ActivityCard } from "./ActivityCard";
import { DropdownIcon } from "./Icons";
import { AddActivityForm } from "./AddActivityForm";

type ActivityCategory =
  | "Physical"
  | "Spiritual"
  | "Intellectual"
  | "Social"
  | "All";

interface Activity {
  imageUrl?: string;
  title: string;
  category: ActivityCategory;
}

export const ActivityGrid = ({
  showAddForm,
  setShowAddForm,
}: {
  showAddForm: boolean;
  setShowAddForm: (show: boolean) => void;
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ActivityCategory>("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [activities, setActivities] = useState<Activity[]>([
    {
      imageUrl:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=150&h=150&fit=crop",
      title: "Soccer",
      category: "Physical",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1585506942812-72b5b5d0e3a1?w=150&h=150&fit=crop",
      title: "Board Games",
      category: "Social",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=150&h=150&fit=crop",
      title: "Meditation",
      category: "Spiritual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=150&fit=crop",
      title: "Book Club",
      category: "Intellectual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=150&h=150&fit=crop",
      title: "Running",
      category: "Physical",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1524222717473-7300000965d7?w=150&h=150&fit=crop",
      title: "Prayer Group",
      category: "Spiritual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?w=150&h=150&fit=crop",
      title: "Chess",
      category: "Intellectual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=150&h=150&fit=crop",
      title: "Party",
      category: "Social",
    },
  ]);

  const filteredActivities =
    selectedCategory === "All"
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  const categories: ActivityCategory[] = [
    "All",
    "Physical",
    "Spiritual",
    "Intellectual",
    "Social",
  ];

  const handleAddActivity = (newActivity: {
    title: string;
    category: string;
    imageUrl?: string;
  }) => {
    setActivities((prev) => [
      ...prev,
      {
        title: newActivity.title,
        category: newActivity.category as ActivityCategory,
        imageUrl: newActivity.imageUrl,
      },
    ]);
  };

  return (
    <section className="flex flex-col items-center px-8 mt-8">
      <div className="relative mb-10">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex justify-center items-center bg-cyan-600 border border-black shadow-sm h-[43px] w-[254px]"
        >
          <span className="text-lg leading-6 text-center text-black">
            {selectedCategory}
          </span>
          <div className="flex justify-center items-center w-14 h-12">
            <DropdownIcon />
          </div>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-black shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false);
                }}
                className={`w-full py-2 px-4 text-left hover:bg-gray-100 ${
                  selectedCategory === category ? "bg-cyan-100" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-10 w-full">
        {filteredActivities.map((activity, index) => (
          <ActivityCard
            key={index}
            imageUrl={activity.imageUrl}
            title={activity.title}
          />
        ))}
      </div>

      {showAddForm && (
        <AddActivityForm
          onClose={() => setShowAddForm(false)}
          onAddActivity={handleAddActivity}
        />
      )}
    </section>
  );
};
