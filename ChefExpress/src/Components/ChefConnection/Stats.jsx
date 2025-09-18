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
              className="relative border rounded-xl shadow-sm p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Background Icon - only visible on md+ */}
              <div className="hidden md:block absolute top-4 right-4 text-gray-200 text-6xl pointer-events-none">
                {stat.icon}
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-black relative z-10">
                {stat.number}
              </h2>
              <p className="mt-2 text-gray-700 text-sm sm:text-base relative z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
