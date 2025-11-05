import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Header = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          {logo.showLogo && logo.url && (
            <img
              src={`${API_URL}${logo.url}`}
              alt="ClintonStack Technologies Logo"
              className="h-10 w-auto"
              loading="lazy"
            />
          )}
          <span className="text-xl font-bold text-[#0B3D91]">ClintonStack</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#0B3D91] transition-colors duration-300 font-medium"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#0B3D91]"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
