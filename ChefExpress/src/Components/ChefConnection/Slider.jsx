import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: (
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full p-2 shadow-md">
        <svg
          className="w-8 h-8 text-gray-800 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    ),
    prevArrow: (
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full p-2 shadow-md">
        <svg
          className="w-8 h-8 text-gray-800 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 relative">
      <Slider {...settings}>
        <div className="flex justify-center items-center p-4">
          <div className="h-[300px] w-full max-w-md bg-white flex justify-center items-center">
            <img
              src="images/Screenshot 2025-09-10 225427.png"
              alt="Slide 1"
              className="max-h-[250px] max-w-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="h-[300px] w-full max-w-md bg-white flex justify-center items-center">
            <img
              src="images/Screenshot 2025-09-10 225442.png"
              alt="Slide 2"
              className="max-h-[250px] max-w-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="h-[300px] w-full max-w-md bg-white flex justify-center items-center">
            <img
              src="images/Screenshot 2025-09-10 225442.png"
              alt="Slide 3"
              className="max-h-[250px] max-w-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="h-[300px] w-full max-w-md bg-white flex justify-center items-center">
            <img
              src="images/Screenshot 2025-09-10 225442.png"
              alt="Slide 4"
              className="max-h-[250px] max-w-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="h-[300px] w-full max-w-md bg-white flex justify-center items-center">
            <img
              src="images/Screenshot 2025-09-10 225442.png"
              alt="Slide 5"
              className="max-h-[250px] max-w-full object-contain"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
