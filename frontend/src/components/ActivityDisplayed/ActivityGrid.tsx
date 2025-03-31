"use client";
import { useState } from "react";
import { ActivityCard } from "./ActivityCard";
import { DropdownIcon } from "./Icons";
import { AddActivityForm } from "./AddActivityForm";
import { ActivityDetailsModal } from "./ActivityDetailsModal";

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
  description?: string;
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
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [activities, setActivities] = useState<Activity[]>([
    {
      imageUrl:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=150&h=150&fit=crop",
      title: "Soccer",
      category: "Physical",
      description:
        "Join our weekly soccer matches! All skill levels welcome. Bring your cleats and water bottle.",
    },
    {
      imageUrl: "",
      title: "Board Games",
      category: "Social",
      description:
        "Fun night of board games and snacks. We have classics like Monopoly and new favorites like Catan.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=150&h=150&fit=crop",
      title: "Workout",
      category: "Physical",
      description:
        "Group workout sessions with professional trainers. Suitable for all fitness levels.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=150&fit=crop",
      title: "Book Club",
      category: "Intellectual",
      description:
        "Monthly book discussions and literary analysis. Expand your mind through reading.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=150&h=150&fit=crop",
      title: "Running",
      category: "Physical",
      description:
        "Group runs through scenic routes. All paces welcome - from beginners to marathoners.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?w=150&h=150&fit=crop",
      title: "Chess",
      category: "Intellectual",
      description:
        "Chess matches and strategy discussions. Improve your game with fellow enthusiasts.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=150&h=150&fit=crop",
      title: "Party",
      category: "Social",
      description:
        "Monthly social gatherings with music, food, and great company.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=150&h=150&fit=crop",
      title: "Basketball Tournament",
      category: "Physical",
      description:
        "Annual basketball competition with teams from across the region.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=150&h=150&fit=crop",
      title: "Hiking/Nature Walk",
      category: "Physical",
      description:
        "Explore beautiful trails and connect with nature on our guided hikes.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=150&h=150&fit=crop",
      title: "Dance Class",
      category: "Physical",
      description:
        "Learn various dance styles from professional instructors in a fun group setting.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
      title: "Obstacle Course Challenge",
      category: "Physical",
      description:
        "Test your strength and endurance in our exciting obstacle course events.",
    },
    {
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/ad2bf3d4a838e429788b3210ff2b1958b7f7ffe7/full/1920%2C/0/default",
      title: "Scripture Study Night",
      category: "Spiritual",
      description:
        "Weekly scripture study and discussion groups to strengthen faith.",
    },
    {
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/208x117/accra-ghana-temple-detail-249022-2400x1200.jpg",
      title: "Temple Trip",
      category: "Spiritual",
      description: "Organized visits to the temple for worship and reflection.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=150&h=150&fit=crop",
      title: "Testimony Meeting",
      category: "Spiritual",
      description:
        "Monthly meetings where members share personal spiritual experiences.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=150&h=150&fit=crop",
      title: "Service Project",
      category: "Spiritual",
      description:
        "Opportunities to serve the community and help those in need.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=150&fit=crop",
      title: "Escape Room (Gospel-Themed)",
      category: "Intellectual",
      description:
        "Solve puzzles and challenges based on gospel principles in our themed escape rooms.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150&h=150&fit=crop",
      title: "Debate Night",
      category: "Intellectual",
      description:
        "Friendly debates on various topics to practice critical thinking and communication.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=150&h=150&fit=crop",
      title: "Journaling Workshop",
      category: "Intellectual",
      description:
        "Learn techniques for effective journaling and self-reflection.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&h=150&fit=crop",
      title: "STEM Challenge",
      category: "Intellectual",
      description:
        "Hands-on science, technology, engineering, and math activities and competitions.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=150&h=150&fit=crop",
      title: "Talent Show",
      category: "Social",
      description: "Annual showcase of talents from our community members.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=150&h=150&fit=crop",
      title: "Game Night",
      category: "Social",
      description:
        "Casual evenings filled with board games, card games, and fun competitions.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=150&h=150&fit=crop",
      title: "Cultural Night",
      category: "Social",
      description:
        "Celebrate diversity with food, performances, and traditions from around the world.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop",
      title: "Karaoke Night",
      category: "Social",
      description:
        "Let loose and have fun singing your favorite songs with friends.",
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
        description: "New activity - description coming soon!",
      },
    ]);
  };

  const handleActivityClick = (activity: Activity) => {
    setSelectedActivity(activity);
    setShowDetailsModal(true);
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
            onClick={() => handleActivityClick(activity)}
          />
        ))}
      </div>

      {showAddForm && (
        <AddActivityForm
          onClose={() => setShowAddForm(false)}
          onAddActivity={handleAddActivity}
        />
      )}

      {showDetailsModal && selectedActivity && (
        <ActivityDetailsModal
          activity={selectedActivity}
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </section>
  );
};
