import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import Hamburger from "hamburger-react";
import { FaChevronRight } from "react-icons/fa";
// Removed IoMdClose as it's no longer needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Rough screen width check
  const isDesktop = window.innerWidth >= 768;

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
            <div className="absolute left-0 top-full bg-white text-black mt-0 rounded-lg shadow-lg min-w-[220px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 pointer-events-auto">
              <Link to="#" className="block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 rounded-t-lg transition">
                One-Time Cook
              </Link>
              <Link to="#" className="block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 transition">
                Chef for Party
              </Link>
              <Link to="#" className="block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 rounded-b-lg transition">
                ChefExpress से जुड़ें
              </Link>
            </div>
          </div>

          <Link to="#" className="hover:text-orange-500 font-medium px-3">
            Cooks Near Me
          </Link>
        </nav>

        {/* Contact Button (Desktop only, hidden when hamburger open) */}
        <div className={`hidden md:flex items-center ${isMenuOpen && isDesktop ? "hidden" : ""}`}>
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

        {/* Hamburger icon */}
        <div className="flex items-center ml-4">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={30}
            color="#fff"
            label="Toggle menu"
          />
        </div>
      </div>

      {/* Slide-in Sidebar for desktop */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-slate-900 bg-opacity-90 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen && isDesktop ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-5 space-y-4">
          {/* Hamburger close button at the top of the sidebar */}
          <div className="self-end">
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={30}
              color="#000"
              label="Toggle menu"
            />
          </div>

          <Link to="/about" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>About Us</Link>
          <hr />
          <Link to="/blog" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>Blog</Link>
          <hr />
          <Link to="/career" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>Career</Link>
          <hr />
          <Link to="/investor-relation" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>Investor Relation</Link>
          <hr />
          <Link to="/testimonial" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>Testimonials</Link>
          <hr />

        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && !isDesktop && (
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
                One-Time Cook
              </Link>
              <Link to="#" className="block text-lg font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-3 py-2 transition">
                Chef for Party
              </Link>
              <Link to="#" className="block text-lg font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-3 py-2 transition">
                ChefExpress से जुड़ें
              </Link>
            </div>
          )}

          <Link to="#" className="block text-lg py-2 hover:text-orange-500 font-semibold px-2">Cooks Near Me</Link>
          <Link to="#" className="block text-lg py-2 hover:text-orange-500 font-semibold px-2">About Us</Link>

          <button className="w-full text-white bg-orange-500 border-0 py-3 px-5 hover:bg-orange-600 rounded-lg text-lg font-semibold">Contact Us</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
