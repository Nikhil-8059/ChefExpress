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
    <div className="w-full max-w-7xl mx-auto py-10 px-10">
      <Slider {...settings}>
        <div className="flex justify-center items-center p-4">
          <img
            src="images/Screenshot 2025-09-10 225427.png"
            alt="Slide 1"
            className=" mt-12 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 2"
            className="max-h-96 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 3"
            className="max-h-96 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 4"
            className="max-h-96 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 5"
            className="max-h-96 w-auto object-contain"
          />
        </div>
      </Slider>

      
    </div>
  );
} 



