"use client";
import * as React from "react";
import { SearchHeader } from "./SearchHeader";
import { LoginForm } from "./LoginForm";
import { Footer } from "./Footer";

export default function YouthActivities() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col min-h-screen bg-white">
        <SearchHeader />
        <main className="flex-1 px-4 py-6">
          <h1 className="mb-8 text-3xl font-semibold text-center max-sm:mb-6 max-sm:text-3xl">
            Youth Activities
          </h1>
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
