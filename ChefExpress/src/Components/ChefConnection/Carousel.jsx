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
    arrows: false,

    // Rectangular dots
    customPaging: () => (
      <div className="w-10 sm:w-16 h-1 rounded-sm transition-all duration-300"></div>
    ),

    appendDots: dots => (
      <div className="absolute bottom-6 w-full">
        <ul className="flex justify-center items-center gap-3 sm:gap-4">
          {dots.map(dot =>
            React.cloneElement(dot, {
              className: `w-10 sm:w-16 h-1 rounded-sm transition-all duration-300 cursor-pointer ${
                dot.props.className.includes("slick-active")
                  ? "bg-orange-500"
                  : "bg-white"
              }`
            })
          )}
        </ul>
      </div>
    )
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="/images/chef.png"
            alt="Chef 1"
            className="w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-4 sm:px-8 text-left text-white max-w-2xl">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-3 sm:mb-4">
                समाज का नज़रिया बदलें
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6">
                देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="/images/chef2.png"
            alt="Chef 2"
            className="w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-4 sm:px-8 text-left text-white max-w-2xl">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-3 sm:mb-4">
                खाना पकाने में बदलाव लाएँ
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6">
                कुक्स को सम्मान और अवसर दिलाने के लिए हमारे साथ जुड़ें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="/images/chefgroup.png"
            alt="Chef Group"
            className="w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-4 sm:px-8 text-left text-white max-w-2xl">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-3 sm:mb-4">
                एक साथ बदलाव की रसोई
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6">
                कुक्स के लिए बेहतर भविष्य बनाने की इस यात्रा का हिस्सा बनें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroCarousel;
