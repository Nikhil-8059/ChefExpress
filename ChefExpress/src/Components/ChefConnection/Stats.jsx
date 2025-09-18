import React from "react";
import { FaUtensils } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";
import { FaHouseUser } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-12">
        <div className="flex flex-wrap justify-around w-full">
          {/* Stats Card 1 */}
          <div className="relative flex flex-col items-center text-center p-6 border rounded-xl md:border-0">
            {/* Watermark Icon */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 text-9xl text-gray-400 pointer-events-none">
              <FaUtensils />
            </div>
            <div className="text-5xl font-extrabold text-black mb-2 relative z-10">3M+</div>
            <p className="text-gray-600 text-lg relative z-10">Meals cooked with love</p>
          </div>

          {/* Stats Card 2 */}
          <div className="relative flex flex-col items-center text-center p-6 border rounded-xl md:border-0">
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 text-9xl text-gray-400 pointer-events-none">
              <PiChefHatBold />
            </div>
            <div className="text-5xl font-extrabold text-black mb-2 relative z-10">4500+</div>
            <p className="text-gray-600 text-lg relative z-10">Verified & Trained Cooks</p>
          </div>

          {/* Stats Card 3 */}
          <div className="relative flex flex-col items-center text-center p-6 border rounded-xl md:border-0">
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 text-9xl text-gray-400 pointer-events-none">
              <FaHouseUser />
            </div>
            <div className="text-5xl font-extrabold text-black mb-2 relative z-10">10K+</div>
            <p className="text-gray-600 text-lg relative z-10">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
