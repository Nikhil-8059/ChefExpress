import React from "react";
import { FaUtensils, FaHome } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto  flex justify-center py-8">
        <div className="flex flex-row  justify-around w-1/2 gap-3 md:gap-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center  p-4 flex-1
                          border rounded-xl md:border-0 md:rounded-none">
            <div className="flex items-center">
              <div className="text-xl md:text-3xl font-bold text-black">3M+</div>
              <FaUtensils className="text-green-600 text-lg md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-xs md:text-lg mt-1">
              Meals cooked with love
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-4 flex-1
                          border rounded-xl md:border-0 md:rounded-none">
            <div className="flex items-center">
              <div className="text-xl md:text-3xl font-bold text-black">4500+</div>
              <PiChefHatBold className="text-blue-600 text-lg md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-xs md:text-lg mt-1">
              Verified & Trained Cooks
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-4 flex-1
                          border rounded-xl md:border-0 md:rounded-none">
            <div className="flex items-center">
              <div className="text-xl md:text-3xl font-bold text-black">10K+</div>
              <FaHome className="text-orange-600 text-lg md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-xs md:text-lg mt-1">
              Households served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
