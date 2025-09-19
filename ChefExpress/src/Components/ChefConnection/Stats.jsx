import React from "react";
import { FaUtensils,FaHouseUser } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto py-10">
        {/* Always 3 in a row */}
        <div className="grid grid-cols-3 gap-3 text-center ">
          {/* Card 1 */}
          <div className=" relative p-3 border rounded-lg md:border-1 md:p-6">
            {/* Background Icon only on desktop */}
            <div className="hidden md:block absolute top-1/2 right-1 transform -translate-y-1/2 opacity-50 text-6xl text-gray-400 pointer-events-none">
              <FaUtensils />
            </div>
            <div className="text-lg md:text-4xl font-bold text-black relative z-10">
              3M+
            </div>
            <p className=" text-xs md:text-base text-gray-700 relative z-10">
              Meals cooked with love
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative p-3 border rounded-lg md:border-1 md:p-6">
            <div className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 opacity-50 text-6xl text-gray-400 pointer-events-none">
              <PiChefHatBold />
            </div>
            <div className="text-lg md:text-4xl font-bold text-black z-10">
              4500+
            </div>
            <p className="text-xs md:text-base text-gray-700  z-10">
              Verified & Trained Cooks
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative p-3 border rounded-lg md:border-1 md:p-6">
            <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 opacity-50 text-6xl text-gray-400 pointer-events-none">
              <FaHouseUser />
            </div>
            <div className="text-lg md:text-4xl font-bold text-black relative z-10">
              10K+
            </div>
            <p className="text-xs md:text-base text-gray-700 relative z-10">
              Households served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
