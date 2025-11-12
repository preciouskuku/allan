import React from "react";
import BlueStrings from "../assets/big.png";
import YellowStrings from "../assets/Group 171.png";
import OrangeStrings from "../assets/orrange.png";
import GreenStrings from "../assets/main.png";
import RedStrings from "../assets/blue.png";

import kly from "../assets/khy.jpg";
import bgh from "../assets/bgh.jpg";
import man from "../assets/man.jpg";
import pep from "../assets/pep.jpg";

const Professionals = () => {
  const professionals = [
    {
      id: 1,
      name: "Samuel Moyo",
      title: "Construction Specialist",
      image: kly,
      description:
        "Specializes in residential and commercial construction, including roofing, tiling, and renovations.",
      string: YellowStrings,
    },
    {
      id: 2,
      name: "Grace Ncube",
      title: "Professional Plumber",
      image: pep,
      description:
        "Experienced in pipework, bathroom fitting, and water system repairs.",
      string: OrangeStrings,
    },
    {
      id: 3,
      name: "John Chikwara",
      title: "Certified Electrician",
      image: bgh,
      description:
        "Certified electrician offering wiring, lighting, and solar power installations.",
      string: GreenStrings,
    },
    {
      id: 4,
      name: "Buildwise Contractors",
      title: "Construction Company",
      image: man,
      description:
        "A trusted team of builders with a strong portfolio in housing development and structural renovations.",
      string: RedStrings,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Blue background decoration */}
      <img
        src={BlueStrings}
        alt="Blue Strings"
        className="absolute top-0 right-0 w-[90%] sm:w-[70%] md:w-[50%] opacity-90 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Featured Service Providers
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Meet Top-Rated Professionals Ready{" "}
            <span className="text-blue-500">to Work With You</span>
          </h2>

          <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base">
            We highlight trusted and highly-rated service providers from across
            Zimbabwe. These professionals have demonstrated excellence in their
            work, received outstanding client reviews, and are verified by our
            team.
          </p>
        </div>

        {/* Professionals List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 mt-6 sm:mt-10">
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-8 border-white shadow-2xl flex-shrink-0 z-10 mb-4 sm:mb-0">
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card */}
              <div className="flex-1 bg-blue-600 rounded-2xl p-5 sm:p-8 md:p-10 text-white relative sm:-ml-10 md:-ml-14 shadow-xl w-full">
                {pro.string && (
                  <img
                    src={pro.string}
                    alt="Decorative String"
                    className="absolute top-0 right-0 w-[60%] sm:w-[55%] opacity-50 pointer-events-none"
                  />
                )}

                <div className="relative z-10">
                  <h4 className="text-base sm:text-lg font-bold">
                    {pro.name}
                  </h4>
                  <p className="font-semibold opacity-90 text-xs sm:text-sm">
                    {pro.title}
                  </p>
                  <p className="text-xs sm:text-sm mt-2 opacity-90 leading-snug">
                    {pro.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg transition text-sm sm:text-base">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
