import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import avatarImg from "../assets/avatar.jpg";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Providers", path: "/providers" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="BuildLink Logo"
            className="w-9 h-9 rounded-full border border-white/40 shadow-sm"
          />
          <span className="text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition">
            BuildLink
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 font-medium">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-blue-600 hover:text-white transition shadow-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
            Register
          </button>
          <img
            src={avatarImg}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white/40 shadow-md object-cover"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-200 animate-slideDown">
          <ul className="flex flex-col items-center space-y-3 py-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-2 rounded-full text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
              Register
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
