import React from "react";
import GalleryBg from "../assets/gallery.jpg"; // replace with your image

const GallerySection = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${GalleryBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          See Our <span className="text-sky-400">Gallery</span>
        </h2>
        <p className="text-lg md:text-xl mb-8">
          with our recent <span className="font-semibold">projects</span>
        </p>

        <a
          href="/gallery"
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Visit Gallery
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
