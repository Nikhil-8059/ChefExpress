import React from "react";
import { FaUtensils, FaUserTie, FaHome } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-8">
        <div className="flex flex-wrap justify-around w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-4 md:p-6 w-1/3">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-black">3M+</div>
              <FaUtensils className="text-green-600 text-xl md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-sm md:text-lg mt-1">
              Meals cooked with love
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-4 md:p-6 w-1/3">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-black">4500+</div>
              <FaUserTie className="text-blue-600 text-xl md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-sm md:text-lg mt-1">
              Verified & Trained Cooks
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-4 md:p-6 w-1/3">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-black">10K+</div>
              <FaHome className="text-orange-600 text-xl md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-sm md:text-lg mt-1">
              Households served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
