import React, { useState, useEffect } from "react";
import HeroBg from "../assets/expert.jpg"; // your background image
import builderImg from "../assets/slide.jpg";
import plumberImg from "../assets/plumber.jpg";
import electricianImg from "../assets/man.jpg";

const ExpertsHero = () => {
  const providers = [
    { name: "Builder", image: builderImg },
    { name: "Plumber", image: plumberImg },
    { name: "Electrician", image: electricianImg },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate cards every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % providers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [providers.length]);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF80] via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-20 pb-20 w-full flex flex-col md:flex-row md:justify-between items-end">
        {/* Left Text */}
        <div className="max-w-xl">
          <p className="text-blue-300 mb-2 text-lg">Welcome to Buildlinks</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Experts Near <span className="text-sky-400">You</span>
          </h1>
          <p className="text-lg md:text-xl mb-4">
            <span className="text-sky-400">Where you find</span> the best of the
            best certified featured service providers like:
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            {providers[currentIndex].name}
          </h2>
        </div>

        {/* Right Side Rotating Cards */}
        <div className="flex items-center gap-4 mt-10 md:mt-0">
          {providers.map((provider, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 rounded-2xl overflow-hidden shadow-lg ${
                idx === currentIndex
                  ? "w-40 h-40 md:w-48 md:h-48 opacity-100"
                  : "w-28 h-28 md:w-32 md:h-32 opacity-50"
              }`}
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 flex gap-2 z-10">
        {providers.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ExpertsHero;
