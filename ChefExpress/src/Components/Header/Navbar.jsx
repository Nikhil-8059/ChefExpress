import React from 'react'
import { Link } from "react-router-dom";
import { PiChefHatBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="text-white body-font bg-slate-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="#">
          <span className="text-2xl font-bold text-orange-500"><PiChefHatBold />ChefExpress</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
          <Link to="#" className="mr-8 hover:text-orange-500">Our Services</Link>
          <Link to="#" className="mr-8">Cooks Near Me</Link>
          <Link to="#" className="mr-8 ">ChefExpress से जुड़ें</Link>
        
        </nav>

        <button className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
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
    </header>
  )
}

export default Navbar