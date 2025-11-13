import React from "react";
import GalleryHeroBg from "../assets/galleryhero.jpg"; // hero background image
import img1 from "../assets/gallery.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery4 .jpg";
import img7 from "../assets/plumber.jpg";
import img8 from "../assets/galler1.jpg";

const GalleryPage = () => {
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${GalleryHeroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 md:px-20 max-w-3xl">
          <p className="text-blue-300 mb-2 text-lg">Welcome to Buildlinks</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            OUR <span className="text-sky-400">GALLERY</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-sky-400">Where our link</span> connects skilled
            builders, plumbers, and electricians across Zimbabwe — helping you
            compare, connect, and hire with confidence.
          </p>
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="text-center mb-10">
          <button className="bg-sky-500 text-white px-6 py-2 rounded-full font-semibold text-lg shadow-md">
            Gallery
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
