import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="text-white body-font bg-slate-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">

        {/* Logo */}
        <Link to="#" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500 flex items-center gap-1">
            <PiChefHatBold className="inline-block" /> ChefExpress
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center space-x-8">

          {/* Our Services Dropdown with animated chevron */}
          <div className="relative group">
            <button className="flex items-center hover:text-orange-500 focus:outline-none">
              Our Services
              <FiChevronDown 
                className="ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-180" 
              />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full bg-white text-black mt-0 rounded-lg shadow-lg min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 pointer-events-auto">
              <Link
                to="#"
                className="block px-5 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 rounded-t-lg transition"
              >
                Hire a Cook
              </Link>
              <Link
                to="#"
                className="block px-5 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 transition"
              >
                Catering
              </Link>
              <Link
                to="#"
                className="block px-5 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 rounded-b-lg transition"
              >
                Meal Plans
              </Link>
            </div>
          </div>

          <Link to="#" className="hover:text-orange-500">Cooks Near Me</Link>
          <Link to="#" className="hover:text-orange-500">ChefExpress से जुड़ें</Link>
        </nav>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:block">
          <button className="inline-flex items-center text-white bg-orange-500 border-0 py-1 px-3 hover:bg-orange-600 rounded text-base">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            if (isMobileMenuOpen) setIsMobileServicesOpen(false);
          }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
          <button
            className="flex items-center w-full justify-between hover:text-orange-500 text-lg font-medium"
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            aria-expanded={isMobileServicesOpen}
          >
            Our Services
            <FiChevronDown className={`ml-1 transition-transform duration-300 ease-in-out ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMobileServicesOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <Link to="#" className="block text-lg py-2 font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-2 transition">Hire a Cook</Link>
              <Link to="#" className="block text-lg py-2 font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-2 transition">Catering</Link>
              <Link to="#" className="block text-lg py-2 font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-2 transition">Meal Plans</Link>
            </div>
          )}

          <Link to="#" className="block text-lg py-2 hover:text-orange-500">Cooks Near Me</Link>
          <Link to="#" className="block text-lg py-2 hover:text-orange-500">ChefExpress से जुड़ें</Link>
          <button className="w-full text-white bg-orange-500 border-0 py-2 px-3 hover:bg-orange-600 rounded text-lg">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
