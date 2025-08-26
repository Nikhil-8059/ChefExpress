import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="text-white body-font bg-slate-900">
      <div className="container mx-auto flex flex-wrap px-12 py-5 flex-row items-center justify-between">


        {/* Logo */}
        <Link to="#" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500 flex items-center gap-2">
            <PiChefHatBold className="inline-block text-4xl" />
            ChefExpress
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-lg justify-center space-x-12">
          <div className="relative group">
            <button className="flex items-center hover:text-orange-500 focus:outline-none font-medium">
              Our Services
              <FiChevronDown
                className="ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-180"
              />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full bg-white text-black mt-1 rounded-lg shadow-lg min-w-[220px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 pointer-events-auto">
              <Link to="#" className="block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 rounded-t-lg transition">
                Hire a Cook
              </Link>
              <Link to="#" className="block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 transition">
                Catering
              </Link>
              <Link to="#" className="block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 rounded-b-lg transition">
                Meal Plans
              </Link>
            </div>
          </div>

          <Link to="#" className="hover:text-orange-500 font-medium px-3">
            Cooks Near Me
          </Link>
          <Link to="#" className="hover:text-orange-500 font-medium px-3">
            ChefExpress से जुड़ें
          </Link>
        </nav>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:flex items-center">
          <button className="inline-flex items-center text-white bg-orange-500 border-0 py-2 px-5 hover:bg-orange-600 rounded-lg text-lg font-medium">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Hamburger icon visible on all screen sizes */}
        <div className="flex items-center ml-4">
          <Hamburger
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            size={30}
            color="#fff"
            label="Toggle menu"
          />
        </div>
      </div>

      {/* Mobile menu content only on small devices */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 px-6 pt-3 pb-6 space-y-3">
          <button
            className="flex items-center w-full justify-between hover:text-orange-500 text-lg font-semibold"
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            aria-expanded={isMobileServicesOpen}
          >
            Our Services
            <FiChevronDown className={`ml-2 transition-transform duration-300 ease-in-out ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMobileServicesOpen && (
            <div className="ml-5 space-y-2">
              <Link to="#" className="block text-lg font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-3 py-2 transition">
                Hire a Cook
              </Link>
              <Link to="#" className="block text-lg font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-3 py-2 transition">
                Catering
              </Link>
              <Link to="#" className="block text-lg font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-3 py-2 transition">
                Meal Plans
              </Link>
            </div>
          )}

          <Link to="#" className="block text-lg py-2 hover:text-orange-500 font-semibold px-2">
            Cooks Near Me
          </Link>
          <Link to="#" className="block text-lg py-2 hover:text-orange-500 font-semibold px-2">
            ChefExpress से जुड़ें
          </Link>

          <button className="w-full text-white bg-orange-500 border-0 py-3 px-5 hover:bg-orange-600 rounded-lg text-lg font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
