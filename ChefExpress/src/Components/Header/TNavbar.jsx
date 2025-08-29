import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import Hamburger from "hamburger-react";
import { IoMdClose } from "react-icons/io";

// ✅ Centralized Menu Data
const services = [
  { label: "One-Time Cook", path: "/month" },
  { label: "Chef for Party", path: "#" },
  { label: "ChefExpress से जुड़ें", path: "/Join-as-Chef" },
];

const sidebarLinks = [
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Career", path: "/career" },
  { label: "Investor Relation", path: "/investor-relation" },
  { label: "Testimonials", path: "/testimonial" },
];

const TNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // ✅ Responsive window resize listener
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="text-white body-font bg-slate-900">
      <div className="container mx-auto flex flex-wrap px-8 py-5 flex-row items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500 flex items-center gap-2">
            <PiChefHatBold className="inline-block text-4xl" />
            ChefExpress
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-lg justify-center space-x-12">
          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-orange-500 font-medium">
              Our Services
              <FiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full bg-white text-black rounded-lg shadow-lg min-w-[220px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className={`block px-6 py-3 text-lg font-medium hover:text-orange-500 hover:bg-orange-100 transition 
                    ${idx === 0 ? "rounded-t-lg" : ""} 
                    ${idx === services.length - 1 ? "rounded-b-lg" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="#" className="hover:text-orange-500 font-medium px-3">
            Cooks Near Me
          </Link>
        </nav>

        {/* Contact Button (Desktop only) */}
        <div
          className={`hidden md:flex items-center ${
            isMenuOpen && isDesktop ? "hidden" : ""
          }`}
        >
          <Link to="/contact"> 
          <button className="inline-flex items-center text-white bg-orange-500 py-2 px-5 hover:bg-orange-600 rounded-lg text-lg font-medium">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          </Link>
        </div>

        {/* Hamburger Icon */}
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

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar (Desktop) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-slate-900 bg-opacity-90 text-white shadow-lg z-50 transform transition-transform duration-300 
          ${isMenuOpen && isDesktop ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-5 space-y-4 h-full">
          <button onClick={toggleMenu} className="self-end">
            <IoMdClose size={30} className="text-white hover:text-orange-500" />
          </button>
          {sidebarLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <Link
                to={link.path}
                className="text-lg font-bold hover:text-orange-500"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isDesktop && (
        <div className="fixed top-0 right-0 w-full h-full bg-slate-900 bg-opacity-90 px-6 pt-3 pb-6 space-y-3 z-50 shadow-lg transform transition-transform duration-300">
          <div className="flex justify-end mb-3">
            <button onClick={toggleMenu}>
              <IoMdClose size={30} className="text-white hover:text-orange-500" />
            </button>
          </div>

          {/* Mobile Services Dropdown */}
          <button
            className="flex items-center w-full justify-between hover:text-orange-500 text-lg font-semibold"
            onClick={() => setIsMobileServicesOpen((prev) => !prev)}
            aria-expanded={isMobileServicesOpen}
          >
            Our Services
            <FiChevronDown
              className={`ml-2 transition-transform duration-300 ${
                isMobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isMobileServicesOpen && (
            <div className="ml-5 space-y-2">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block text-lg font-medium hover:text-orange-500 hover:bg-orange-700 rounded-lg px-3 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="#" className="block text-lg py-2 hover:text-orange-500 font-semibold px-2">
            Cooks Near Me
          </Link>
          <Link to="/about" className="block text-lg py-2 hover:text-orange-500 font-semibold px-2">
            About Us
          </Link>
          <Link to="/contact"> 
          <button className="w-full text-white bg-orange-500 py-3 px-5 hover:bg-orange-600 rounded-lg text-lg font-semibold">
            Contact Us
          </button>
          </Link>
          
        </div>
      )}
    </header>
  );
};

export default TNavbar;
