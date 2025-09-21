import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "समाज का नज़रिया बदलें",
    subtitle:
      "देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।",
    buttonText: "ChefKart से जुड़ें",
    buttonLink: "#",
    img: "/chef1.png", // 👉 replace with your image path
    bg: "/kitchen-bg1.jpg", // 👉 replace with background
  },
  {
    id: 2,
    title: "अपने कुक को पहचान दें",
    subtitle:
      "हर घर के कुक को सम्मान और पहचान दिलाने का समय आ गया है।",
    buttonText: "और जानें",
    buttonLink: "#",
    img: "/chef2.png",
    bg: "/kitchen-bg2.jpg",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-between transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <img
            src={slide.bg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between h-full">
            {/* Left Text */}
            <div className="text-white text-center lg:text-left max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
                {slide.title}
              </h1>
              <p className="mb-6 text-lg md:text-xl">{slide.subtitle}</p>
              <a
                href={slide.buttonLink}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
              >
                {slide.buttonText}
              </a>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0">
              <img
                src={slide.img}
                alt="chef"
                className="w-[280px] md:w-[350px] lg:w-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 w-8 rounded-full transition ${
              index === current ? "bg-orange-500" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
