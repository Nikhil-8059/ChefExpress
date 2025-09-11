import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,      // Show 2 images at once
    slidesToScroll: 2,    // Slide 2 images at once
    arrows: true,
    responsive: [
      {
        breakpoint: 768,  // On smaller screens show 1 image
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      <Slider {...settings}>
        <div className="flex justify-center items-center h-[400px]">
          <img
            src="images/Screenshot 2025-09-10 225427.png"
            alt="Slide 1"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-[400px]">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 2"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-[400px]">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 3"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-[400px]">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 4"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-[400px]">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 5"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Slider>
    </div>
  );
}
