import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,      // ✅ Show 2 slides on mobile
          slidesToScroll: 2,
          arrows: false,         // ✅ Hide arrows on mobile
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
    nextArrow: (
      <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md z-10">
        <IoIosArrowForward className="w-6 h-6 text-gray-800 hover:text-gray-600" />
      </div>
    ),
    prevArrow: (
      <div className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md z-10">
        <IoIosArrowBack className="w-6 h-6 text-gray-800 hover:text-gray-600" />
      </div>
    ),
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-10">
      <h1 className=" text-4xl text-center mt-4 sm:mt-5 md:mt-8 mb-4 sm:mb-6 md:mb-8 font-semibold">
        एक प्रमुख पहल
      </h1>

      <Slider {...settings}>
        <div className="flex justify-center items-center p-2 sm:p-4">
          <img
            src="images/Screenshot 2025-09-10 225427.png"
            alt="Slide 1"
            className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg bg-white"
          />
        </div>
        <div className="flex justify-center items-center p-2 sm:p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 2"
            className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg bg-white"
          />
        </div>
        <div className="flex justify-center items-center p-2 sm:p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 3"
            className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg bg-white"
          />
        </div>
        <div className="flex justify-center items-center p-2 sm:p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 4"
            className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg bg-white"
          />
        </div>
        <div className="flex justify-center items-center p-2 sm:p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 5"
            className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg bg-white"
          />
        </div>
      </Slider>
    </div>
  );
}
