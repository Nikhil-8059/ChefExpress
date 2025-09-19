import React from "react";
import { IoRestaurant, IoHomeOutline } from "react-icons/io5";
import { PiChefHat } from "react-icons/pi";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-8 px-4 md:px-0">
        <div className="flex flex-row justify-evenly w-full gap-3 md:gap-0">

          {/* Card 1 */}
          <div className="relative flex flex-col md:items-center items-start text-left md:text-center p-2 border rounded-xl md:border-0 md:rounded-none w-36 md:w-auto">
            <span className="text-xl md:text-5xl font-bold text-black z-10 relative">
              3M+
            </span>
            <p className="text-gray-600 text-xs md:text-lg mt-1 z-10 relative">
              Meals cooked with love
            </p>
            <IoRestaurant
              className="hidden md:block absolute md:-right-0 md:top-2 opacity-25 md:text-6xl z-0"
              aria-hidden="true"
            />
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col md:items-center items-start text-left md:text-center p-2 border rounded-xl md:border-0 md:rounded-none w-36 md:w-auto">
            <span className="text-xl md:text-5xl font-bold text-black z-10 relative">
              4500+
            </span>
            <p className="text-gray-600 text-xs md:text-lg mt-1 z-10 relative">
              Verified & Trained Cooks
            </p>
            <PiChefHat
              className="hidden md:block absolute md:-right-4 md:top-2 opacity-25 md:text-6xl z-0"
              aria-hidden="true"
            />
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col md:items-center items-start text-left md:text-center p-2 border rounded-xl md:border-0 md:rounded-none w-36 md:w-auto">
            <span className="text-xl md:text-5xl font-bold text-black z-10 relative">
              10K+
            </span>
            <p className="text-gray-600 text-xs md:text-lg mt-1 z-10 relative">
              Households served
            </p>
            <IoHomeOutline
              className="hidden md:block absolute md:-right-6 md:top-2 opacity-25 md:text-6xl z-0"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
