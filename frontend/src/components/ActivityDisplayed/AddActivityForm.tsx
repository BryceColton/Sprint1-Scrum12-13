"use client";
import { useState } from "react";
import { CloseIcon } from "./Icons";

interface AddActivityFormProps {
  onClose: () => void;
  onAddActivity: (activity: {
    title: string;
    category: string;
    imageUrl?: string;
  }) => void;
}

export const AddActivityForm = ({
  onClose,
  onAddActivity,
}: AddActivityFormProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Physical");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddActivity({
      title,
      category,
      imageUrl: imageUrl.trim() || undefined,
    });

    // Reset form
    setTitle("");
    setCategory("Physical");
    setImageUrl("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1"
          aria-label="Close form"
        >
          <CloseIcon />
        </button>

        <h2 className="text-xl font-bold mb-4">Add New Activity</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Activity Name*
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="category"
            >
              Category*
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Physical">Physical</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Intellectual">Intellectual</option>
              <option value="Social">Social</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="imageUrl"
            >
              Image URL (optional)
            </label>
            <input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Add Activity
          </button>
        </form>
      </div>
    </div>
  );
};
