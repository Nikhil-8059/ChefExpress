import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="/images/hero1.jpg"
            alt="Hero Slide"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="container mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                समाज का नज़रिया बदलें
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Add more slides below if needed */}
      </Slider>
    </section>
  );
};

export default HeroCarousel;
