import React from "react";
import { ActionButtons } from "../Home Page/ActionButtons";

interface PostItemProps {
  avatarUrl: string;
  username: string;
  imageUrl: string;
  description: string;
}

export const PostItem: React.FC<PostItemProps> = ({
  avatarUrl,
  username,
  imageUrl,
  description,
}) => {
  return (
    <article className="flex flex-col pb-3.5 w-full">
      <header className="flex z-10 gap-2.5 self-start mt-0 ml-3 text-lg leading-none text-black">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="object-contain shrink-0 rounded-full aspect-square w-[34px]"
        />
        <h2 className="my-auto basis-auto">{username}</h2>
      </header>
      <img
        src={imageUrl}
        alt="Post content"
        className="object-contain self-start mt-2 w-full aspect-[1.95]"
      />
      <ActionButtons />
      <p className="mt-3.5 text-lg leading-6 text-black">{description}</p>
    </article>
  );
};
