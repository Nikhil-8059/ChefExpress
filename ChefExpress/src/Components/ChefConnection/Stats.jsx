import React from "react";
import { IoRestaurant, IoPerson, IoHomeOutline } from "react-icons/io5";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-8 px-4 md:px-0">
        <div className="flex flex-row justify-evenly w-full gap-3 md:gap-1">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-4 border rounded-xl md:border-0 md:rounded-none">
            <div className="flex items-center">
              <div className="text-xl md:text-5xl font-bold text-black">3M+</div>
              <IoRestaurant className="text-600 text-lg opacity-30 md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-xs md:text-lg mt-1">Meals cooked with love</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-4 border rounded-xl md:border-0 md:rounded-none">
            <div className="flex items-center">
              <div className="text-xl md:text-5xl font-bold text-black">4500+</div>
              <IoPerson className="text-blue-600 text-lg md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-xs md:text-lg mt-1">Verified & Trained Cooks</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-4 border rounded-xl md:border-0 md:rounded-none">
            <div className="flex items-center">
              <div className="text-xl md:text-5xl font-bold text-black">10K+</div>
              <IoHomeOutline className="text-orange-600 text-lg md:text-2xl ml-1" />
            </div>
            <p className="text-gray-600 text-xs md:text-lg mt-1">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
