import React from "react";
import { FaUtensils } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";
import { FaHouseUser } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { number: "3M+", label: "Meals cooked with love", icon: <FaUtensils /> },
    { number: "4500+", label: "Verified & Trained Cooks", icon: <PiChefHatBold /> },
    { number: "10K+", label: "Households served", icon: <FaHouseUser /> },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center transition-transform duration-300 hover:scale-105 
                         border rounded-xl shadow-sm md:border-0 md:shadow-none"
            >
              {/* Number + Icon side by side on desktop */}
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">{stat.number}</h2>
                <span className="hidden md:inline-block text-gray-400 text-3xl">
                  {stat.icon}
                </span>
              </div>

              <p className="mt-2 text-gray-700 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
