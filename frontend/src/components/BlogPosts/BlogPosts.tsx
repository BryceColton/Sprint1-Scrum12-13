"use client";
import React from "react";
import { PostItem } from "./PostItem";

export const BlogPosts: React.FC = () => {
  const posts = [
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      username: "Sarah Williams",
      imageUrl: "https://extension.usu.edu/davis/images/Youth-hiking.png",
      description: "Outdoor hike joint activity was amazing!",
      likes: 345,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      username: "Nate Jones",
      imageUrl: "https://dcyf.wa.gov/sites/default/files/styles/large/public/2020-12/Youth%20Painting.jpeg?itok=NqF3lWUG",
      description: "Service project painting the community center.",
      likes: 632,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      username: "Carol Baskin",
      imageUrl: "https://t3.ftcdn.net/jpg/08/12/10/00/360_F_812100006_yMzZ8g9x5vbXIHaAGtmhx9ngmoCFscSW.jpg",
      description: "Board Game Night for Mutual was a success!!",
      likes: 167,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      username: "Elder Smith",
      imageUrl: "https://t3.ftcdn.net/jpg/03/69/67/80/360_F_369678057_6jka7Yy01oBk3TcqHeezRpx1XPVg7284.jpg",
      description: "Campfire night and testimonies under the stars.",
      likes: 925,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      username: "Sister Johnson",
      imageUrl: "https://therealfoodacademy.com/oak/files/images/camps/cooking-camps-155.jpg",
      description: "Young Women’s cook-off was a tasty success!",
      likes: 164,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      username: "Brother Thompson",
      imageUrl: "https://faze.b-cdn.net/cms/wp-content/uploads/2015/05/Teens-Playing-Volleyball.jpg",
      description: "Basketball and volleyball night",
      likes: 394,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      username: "Emily Clark",
      imageUrl: "https://grownandflown.com/wp-content/uploads/2020/11/teens-and-mom-making-Christmas-cookies-.jpg",
      description: "We baked cookies and decorated treats!",
      likes: 782,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/8.jpg",
      username: "Jason Lee",
      imageUrl: "https://i.ytimg.com/vi/gS04XrY5C2M/maxresdefault.jpg",
      description: "Donuts on a string brought out our competitive side.",
      likes: 111,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
      username: "Angela Martinez",
      imageUrl: "https://brentwoodlib.librarycalendar.com/sites/default/files/2024-01/1000_F_305755082_CqrAGwgEQDmaligbSWwk29AsmHs2icDl.jpg",
      description: "Karaoke night = loud, proud, and fun!",
      likes: 552,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/10.jpg",
      username: "James Evans",
      imageUrl: "https://media.istockphoto.com/id/2168934489/photo/a-young-woman-holding-and-eating-g-a-piece-of-cinnamon-roll.jpg?s=612x612&w=0&k=20&c=UF4vw0t74eKQ11Y3Wk0_XLfwzcgCG4FO-ixRbEovDPE=",
      description: "Scripture study and cinnamon rolls? Yes please.",
      likes: 202,
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/11.jpg",
      username: "Rachel Green",
      imageUrl: "https://assets.churchofjesuschrist.org/ee/1e/ee1e419abf6aaf755bf1aa636068146a2e0ec311/ee1e419abf6aaf755bf1aa636068146a2e0ec311.jpeg",
      description: "Temple trip and late-night ice cream run!",
      likes: 1051,
    },
  ];

  return (
    <main className="w-full bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <section className="flex flex-col gap-8 py-10 w-full">
          {posts.map((post, index) => (
            <PostItem
              key={index}
              avatarUrl={post.avatarUrl}
              username={post.username}
              imageUrl={post.imageUrl}
              description={post.description}
              likes={post.likes}
            />
          ))}
  
          <button
            aria-label="Add new post"
            className="fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full bg-white border border-black shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-gray-100 transition"
          >
            <span className="text-3xl font-bold text-black leading-none">+</span>
          </button>
        </section>
      </div>
    </main>
  );
  
};
