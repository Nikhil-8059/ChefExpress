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
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // hides arrows since your screenshot had only dots
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          {/* Background Image */}
          <img
            src="/images/hero1.jpg" // replace with your image
            alt="Hero Slide"
            className="w-full h-[90vh] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-6 md:px-12 text-left text-white">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
                समाज का नज़रिया बदलें
              </h1>
              <p className="text-base md:text-xl mb-6">
                देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 (Duplicate for demo) */}
        <div className="relative">
          <img
            src="/images/hero2.jpg"
            alt="Hero Slide 2"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-6 md:px-12 text-left text-white">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
                खाना पकाने में बदलाव लाएँ
              </h1>
              <p className="text-base md:text-xl mb-6">
                कुक्स को सम्मान और अवसर दिलाने के लिए हमारे साथ जुड़ें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
                और जानें
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroCarousel;
