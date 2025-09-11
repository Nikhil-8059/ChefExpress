import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="images/Screenshot 2025-09-10 225427.png" alt="" />
      </div>
      <div>
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" />
      </div>
      <div>
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" />
      </div>
      <div>
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" />
      </div>
      <div>
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" />
      </div>
      <div>
        <img src="images/Screenshot 2025-09-10 225442.png" alt="" />
      </div>
      
    </Slider>
  );
}