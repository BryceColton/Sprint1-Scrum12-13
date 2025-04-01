import React, { useState } from "react";
import { ActionButtons } from "./ActionButtons";


interface PostItemProps {
  avatarUrl: string;
  username: string;
  imageUrl: string;
  description: string;
  likes: number;
}

export const PostItem: React.FC<PostItemProps> = ({
  avatarUrl,
  username,
  imageUrl,
  description,
  likes: initialLikes,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <article className="bg-white rounded-xl shadow p-4 w-full relative">
      <header className="flex items-center gap-3 mb-4">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="w-9 h-9 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold text-black">{username}</h2>
      </header>

      <div className="relative">
        <img
          src={imageUrl}
          alt="Post content"
          className="w-full rounded-md object-cover aspect-[1.9] mb-3"
        />

        {/* Floating like button */}
        <button
          onClick={handleLike}
          className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          {liked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.435 6.5c0 4.525-6.435 9.5-9.435 11.5-3-2-9.435-6.975-9.435-11.5A5.5 5.5 0 0112 4.5a5.5 5.5 0 019.435 2z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.435 6.5c0 4.525-6.435 9.5-9.435 11.5-3-2-9.435-6.975-9.435-11.5A5.5 5.5 0 0112 4.5a5.5 5.5 0 019.435 2z"
              />
            </svg>
          )}
        </button>
      </div>

      <p className="text-base text-gray-800">{description}</p>

      <p className="text-sm text-gray-600 mt-2">{likes} like{likes !== 1 ? "s" : ""}</p>
    </article>
  );
};
