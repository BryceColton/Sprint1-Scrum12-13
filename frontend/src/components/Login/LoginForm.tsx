"use client";
import React, { useState } from "react";
import { IconEyeOff, IconEye } from "@tabler/icons-react";
import {useNavigate} from 'react-router-dom';
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
  
    try {
      const response = await fetch("https://localhost:5000/api/Users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // { username: "...", password: "..." }
      });
  
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Login failed");
        return;
      }
  
      const result = await response.json();
      alert(result.message || "Login successful!");
      navigate("/HomePage");
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };
  
  
  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 w-full bg-white rounded-2xl shadow-lg max-w-[600px] transition-all duration-300 ease-in-out sm:p-10 md:p-12"
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
      <div className="flex justify-center">
      <button
          type="submit"
          className="w-full !bg-[linear-gradient(180deg,#0098C9_0%,#0085B1_9.51%,#007399_37%,#007CA5_55.5%,#008DBB_100%)] hover:!bg-white hover:!text-black text-white font-medium py-2 px-4 rounded transition-all duration-300 ease-in-out"
          >
          Login
        </button>

      </div>
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