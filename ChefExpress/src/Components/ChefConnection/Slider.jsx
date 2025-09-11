import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="flex justify-center items-center h-64">
        <img src="images/Screenshot 2025-09-10 225427.png" alt="" className="object-contain max-h-full" />
      </div>
      <div className="flex justify-center items-center h-64">
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" className="object-contain max-h-full" />
      </div>
      <div className="flex justify-center items-center h-64">
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" className="object-contain max-h-full" />
      </div>
      <div className="flex justify-center items-center h-64">
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" className="object-contain max-h-full" />
      </div>
      <div className="flex justify-center items-center h-64">
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" className="object-contain max-h-full" />
      </div>
    </Slider>
  );
}
