import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl z-10"
      onClick={onClick}
    >
      ➡️
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl z-10"
      onClick={onClick}
    >
      ⬅️
    </div>
  );
};

export default function SimpleSlider() {
  const settings = {
    dots: false,          // Hide dots
    arrows: true,         // Show arrows
    infinite: true,
    speed: 500,
    slidesToShow: 2,      // Show 2 images at once
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // On mobile, show 1 slide at a time
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 relative">
      <Slider {...settings}>
        <div className="h-[400px] flex justify-center items-center">
          <img
            src="images/Screenshot 2025-09-10 225427.png"
            alt="Slide 1"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-[400px] flex justify-center items-center">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 2"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-[400px] flex justify-center items-center">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 3"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-[400px] flex justify-center items-center">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 4"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-[400px] flex justify-center items-center">
          <img
            src="images/Screenshot 2025-09-10 225442.png"
            alt="Slide 5"
            className="h-full w-auto object-contain"
          />
        </div>
      </Slider>
    </div>
  );
}
