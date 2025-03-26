"use client";
import React, { useState } from "react";
import { IconEyeOff, IconEye } from "@tabler/icons-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 w-full bg-white rounded-lg max-w-[400px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-sm:p-5"
    >
      <h2 className="mb-6 text-2xl font-semibold text-center max-sm:text-2xl">
        Sign In
      </h2>
      <div className="mb-4">
        <label htmlFor="username" className="mb-2 text-sm block">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          className="px-3 py-2 w-full text-base rounded border border-solid border-zinc-300 max-sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="mb-2 text-sm block">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            className="px-3 py-2 w-full text-base rounded border border-solid border-zinc-300 max-sm:text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2/4 -translate-y-2/4 cursor-pointer text-stone-500"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <IconEye size={20} /> : <IconEyeOff size={20} />}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="p-3 mb-4 w-full text-base font-medium text-white bg-cyan-600 rounded cursor-pointer border-[none] max-sm:p-2.5 hover:bg-cyan-700 transition-colors"
      >
        Login
      </button>
      <div className="flex flex-col gap-2 items-center">
        <a
          href="#"
          className="text-sm text-cyan-600 underline hover:text-cyan-700"
        >
          I forgot my password
        </a>
        <a
          href="#"
          className="text-sm text-cyan-600 underline hover:text-cyan-700"
        >
          Create a new account
        </a>
      </div>
    </form>
  );
}
