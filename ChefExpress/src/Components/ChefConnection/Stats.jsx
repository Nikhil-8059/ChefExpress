import React from "react";
import { IoRestaurant, IoPerson, IoHomeOutline } from "react-icons/io5";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-8 px-4 md:px-0">
        <div className="flex flex-row justify-evenly w-full gap-3 md:gap-1">

          {/* Card 1 */}
          <div className="relative flex flex-col md:items-center items-start text-left md:text-center p-4 border rounded-xl md:border-1 md:rounded-none">
            <span className="text-xl md:text-5xl font-bold text-black z-10 relative">
              3M+
            </span>
            <p className="text-gray-600 text-xs md:text-lg mt-1 z-10 relative">
              Meals cooked with love
            </p>
            <IoRestaurant
              className="hidden md:block absolute -right-5 top-2 md:top-4 md:-right-6 text-black opacity-10 text-7xl md:text-8xl z-0 pointer-events-none select-none"
              aria-hidden="true"
            />
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col md:items-center items-start text-left md:text-center p-4 border rounded-xl md:border-1 md:rounded-none">
            <span className="text-xl md:text-5xl font-bold text-black z-10 relative">
              4500+
            </span>
            <p className="text-gray-600 text-xs md:text-lg mt-1 z-10 relative">
              Verified & Trained Cooks
            </p>
            <IoPerson
              className="hidden md:block absolute -right-5 top-2 md:top-4 md:-right-6 text-black opacity-10 text-7xl md:text-8xl z-0 pointer-events-none select-none"
              aria-hidden="true"
            />
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col md:items-center items-start text-left md:text-center p-4 border rounded-xl md:border-1 md:rounded-none">
            <span className="text-xl md:text-5xl font-bold text-black z-10 relative">
              10K+
            </span>
            <p className="text-gray-600 text-xs md:text-lg mt-1 z-10 relative">
              Households served
            </p>
            <IoHomeOutline
              className="hidden md:block absolute -right-5 top-2 md:top-4 md:-right-6 text-black opacity-10 text-7xl md:text-8xl z-0 pointer-events-none select-none"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
