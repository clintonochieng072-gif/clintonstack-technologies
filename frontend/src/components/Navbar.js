import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#0B3D91]">
              ClintonStack
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="text-gray-700 hover:text-[#0B3D91] transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#0B3D91] transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#0B3D91] transition duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-[#0B3D91] transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#0B3D91] transition duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#0B3D91] transition duration-300"
            >
              Contact
            </a>
            <a
              href="https://wa.link/qk8ej1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#0B3D91]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#hero"
                className="block text-gray-700 hover:text-[#0B3D91] py-2"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-[#0B3D91] py-2"
              >
                About
              </a>
              <a
                href="#services"
                className="block text-gray-700 hover:text-[#0B3D91] py-2"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-gray-700 hover:text-[#0B3D91] py-2"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="block text-gray-700 hover:text-[#0B3D91] py-2"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-[#0B3D91] py-2"
              >
                Contact
              </a>
              <a
                href="https://wa.link/qk8ej1"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-primary text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
