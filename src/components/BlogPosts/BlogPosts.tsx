"use client";
import React from "react";
import { StatusBar } from "../HomePage/StatusBar";
import { SearchBar } from "../Calendar/SearchBar";
import { PostItem } from "./PostItem";
import { HomeIndicator } from "./HomeIndicator";

export const BlogPosts: React.FC = () => {
  return (
    <main className="mx-auto w-full bg-white max-w-[480px]">
      <div className="w-full">
        <StatusBar />
        <SearchBar />
      </div>
      <section className="flex flex-col px-7 pb-96 mt-64 w-full">
        <div>
          <PostItem
            avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a63bac4be96a8680860196dee76dcc06e01c298120d559a394f55e903481bc70?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
            username="Sarah Williams"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/08cce83a58a707d4a9504a71ddadffc99bc13800fdd0b026c01a3c56a273fa83?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
            description="Some pictures from our outdoors hike joint activity"
          />
          <div className="mt-64">
            <PostItem
              avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9f51ff90f63879fd5326440cb9e0f4a90d785cc8e4b7c9c5134e850291ab7951?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
              username="Nate Jones"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2dab1604887e6bb21d95bae1546b3c9fbc52e4aff0b77d68cf62c46f7bb7e0c1?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
              description="Service Project with the Youth!"
            />
          </div>
          <div className="mt-64">
            <PostItem
              avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cb5af12d7af6c93cc7d4e98101572ed6f54bdb57852f0e4e6b7f9767a466b7cc?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
              username="Carol Baskin"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2f6fd8ba01472c1b16ebb0815cddeeb9167fcf4f88b404c6a79f37e7240b2954?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
              description="Fear Factor!"
            />
          </div>
        </div>
        <button
          aria-label="Add new post"
          className="flex overflow-hidden z-10 gap-2 justify-center items-center self-end px-3 mt-0 w-11 h-11 border border-solid bg-zinc-800 border-zinc-800 rounded-[32px]"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d47d9f33327c79df95c03bcd39319eecc28a97293c329eb03f1289375ed360c?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
            alt="Add"
            className="object-contain self-stretch my-auto w-5 aspect-square"
          />
        </button>
        <HomeIndicator />
      </section>
    </main>
  );
};


