import React from "react";

const FoodBanner = () => {
  return (
    <div
      className="relative h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Rectangle_60_bfb1e0017f.png')",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          What's better than your favourite food?
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mt-4 leading-snug">
          Getting it cooked in <br className="hidden sm:block" /> your kitchen.
        </p>
      </div>
    </div>
  );
};

export default FoodBanner;
