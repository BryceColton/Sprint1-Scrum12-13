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
        "data:image/jpeg;base64,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",
      title: "Board Games",
      category: "Social",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=150&h=150&fit=crop",
      title: "Workout",
      category: "Physical",
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
    // Physical Activities
    {
      imageUrl:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=150&h=150&fit=crop",
      title: "Basketball Tournament",
      category: "Physical",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=150&h=150&fit=crop",
      title: "Hiking/Nature Walk",
      category: "Physical",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=150&h=150&fit=crop",
      title: "Dance Class",
      category: "Physical",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
      title: "Obstacle Course Challenge",
      category: "Physical",
    },
    // Spiritual Activities
    {
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/ad2bf3d4a838e429788b3210ff2b1958b7f7ffe7/full/1920%2C/0/default",
      title: "Scripture Study Night",
      category: "Spiritual",
    },
    {
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/208x117/accra-ghana-temple-detail-249022-2400x1200.jpg",
      title: "Temple Trip",
      category: "Spiritual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=150&h=150&fit=crop",
      title: "Testimony Meeting",
      category: "Spiritual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=150&h=150&fit=crop",
      title: "Service Project",
      category: "Spiritual",
    },
    // Intellectual Activities
    {
      imageUrl:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=150&fit=crop",
      title: "Escape Room (Gospel-Themed)",
      category: "Intellectual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150&h=150&fit=crop",
      title: "Debate Night",
      category: "Intellectual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=150&h=150&fit=crop",
      title: "Journaling Workshop",
      category: "Intellectual",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&h=150&fit=crop",
      title: "STEM Challenge",
      category: "Intellectual",
    },
    // Social Activities
    {
      imageUrl:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=150&h=150&fit=crop",
      title: "Talent Show",
      category: "Social",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=150&h=150&fit=crop",
      title: "Game Night",
      category: "Social",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      title: "Cultural Night",
      category: "Social",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop",
      title: "Karaoke Night",
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
