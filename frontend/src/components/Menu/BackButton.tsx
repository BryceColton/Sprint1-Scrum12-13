import { useNavigate } from "react-router-dom";
import React from "react";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className="absolute top-4 left-5"
      aria-label="Go back"
      onClick={() => navigate(-1)}
    >
      <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.0416 33.5H13.9583M13.9583 33.5L33.4999 53.0417M13.9583 33.5L33.4999 13.9583"
          stroke="#212121"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
