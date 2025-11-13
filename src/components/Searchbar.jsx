// src/components/SearchBarSection.jsx
import React from "react";

const SearchBarSection = () => {
  return (
    <section className="relative w-full -mt-20 z-20 flex flex-col items-center">
      {/* Floating Search Bar */}
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-5 md:p-6 w-[90%] md:w-[80%] max-w-5xl flex flex-col md:flex-row items-center gap-3 transition-all duration-300 hover:shadow-blue-100">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow p-3 rounded-xl border border-gray-200 text-gray-700 focus:ring-2 focus:ring-blue-500 w-full shadow-sm"
        />
        <select className="p-3 rounded-xl border border-gray-200 text-gray-700 focus:ring-2 focus:ring-blue-500 w-full md:w-auto shadow-sm">
          <option>Builders</option>
          <option>Plumbers</option>
          <option>Electricians</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          className="p-3 rounded-xl border border-gray-200 text-gray-700 focus:ring-2 focus:ring-blue-500 w-full md:w-auto shadow-sm"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full md:w-auto shadow-md">
          Search
        </button>
      </div>

      {/* Category Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {[
          "All",
          "Builders",
          "Plumber",
          "Plumber",
          "Company",
          "Party tome",
          "Job",
        ].map((item, idx) => (
          <button
            key={idx}
            className={`px-6 py-2 text-lg rounded-full font-medium border-2 border-sky-500 transition ${
              idx === 0
                ? "bg-sky-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-sky-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SearchBarSection;
