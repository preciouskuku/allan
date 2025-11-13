// src/components/ProvidersHero.jsx
import React from "react";
import HeroBg from "../assets/hero-image.jpg";

const ProvidersHero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 text-white px-6 md:px-20 pb-28">
        <p className="text-blue-300 mb-2 text-lg">Welcome to Buildlinks</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Featured <span className="text-blue-500">Provider</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Let find what we are looking for at Buildlinks
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold transition">
            Explore more
          </button>

          <button className="flex items-center space-x-2 text-white">
            <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center">
              {/* Play Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              </svg>
            </div>
            <span>Watch video</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProvidersHero;
