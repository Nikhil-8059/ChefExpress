import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Carousel Data (Using Hindi Text and Image URLs for Background) ---
const slides = [
  {
    id: 1,
    title: "समाज का नज़रिया बदलें",
    subtitle: "देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।",
    buttonText: "ChefKart से जुड़ें",
    // Placeholder image URL - Replace with your actual image URLs
    imageUrl: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_01_f31e87e92e.webp&w=1920&q=75",
  },
  {
    id: 2,
    title: "हुनर से पैसे कमाएँ।",
    subtitle: "अपने खाना बनाने की प्रतिभा को एक नई शुरुआत दें और इसके माध्यम से पैसे कमाएँ।",
    buttonText: "ChefKart से जुड़ें",
    // Placeholder image URL - Replace with your actual image URLs
    imageUrl: "https://placehold.co/1200x900/365314/ffffff?text=Chef+Cooking+Background+2",
  },
  {
    id: 3,
    title: "ChefKart का हिस्सा बनें",
    subtitle: "हमसे जुड़े 4500 से भी ज़्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएँ।",
    buttonText: "ChefKart से जुड़ें",
    // Placeholder image URL - Replace with your actual image URLs
    imageUrl: "https://placehold.co/1200x900/831843/ffffff?text=Chef+Team+Background+3",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Navigate to the previous slide
  const prev = useCallback(() => {
    setCurrent(current => (current === 0 ? slides.length - 1 : current - 1));
  }, []);

  // Navigate to the next slide
  const next = useCallback(() => {
    setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [next]);

  return (
    <>
      
      <div className="relative w-full overflow-hidden"> {/* Carousel is not rounded */}
        {/* --- Carousel Track --- */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              {/* --- Slide Container with Background Image and Height --- */}
              <div 
                // Set responsive height for the hero banner: Reduced height on mobile (h-[50vh]), scales up on desktop (md:h-[90vh])
                className={`relative h-[50vh] sm:h-[70vh] md:h-[90vh] text-white bg-cover bg-center transition-opacity duration-1000`}
                style={{ 
                  backgroundImage: `url(${slide.imageUrl})`,
                  // Adding a fallback background color
                  backgroundColor: 'rgb(24 24 27)', 
                }}
              >
                
                {/* --- Dark Gradient Overlay for Text Readability (matches screenshot) --- */}
                {/* Adjusted gradient to transition to a darker bottom, simulating the fade above the stats section */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

                {/* --- Content Area (Text and Button) --- */}
                {/* ALIGNMENT LOGIC CHANGED: Always Left-aligned (items-start and text-left) */}
                <div className="absolute inset-0 w-full flex flex-col justify-center items-start p-6 sm:p-12 lg:p-20">
                  {/* Text container is now always left-aligned */}
                  <div className="max-w-xl text-left"> 
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <button 
                      onClick={() => console.log(`Button clicked for slide ${slide.id}`)}
                      // Button style matching the screenshot
                      className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-xl hover:bg-orange-600 transition duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- Controls (Arrows) --- */}
        <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4">
          {/* Previous Button */}
          <button 
            onClick={prev}
            aria-label="Previous Slide"
            // Increased button size for mobile touch targets and better desktop scaling
            className="p-3 md:p-4 rounded-full shadow-md bg-white/30 text-white hover:bg-white/50 transition-colors duration-300 opacity-80 hover:opacity-100 backdrop-blur-sm"
          >
            <ChevronLeft size={24} className="md:size-30" />
          </button>

          {/* Next Button */}
           <button 
            onClick={next}
            aria-label="Next Slide"
            // Increased button size for mobile touch targets and better desktop scaling
            className="p-3 md:p-4 rounded-full shadow-md bg-white/30 text-white hover:bg-white/50 transition-colors duration-300 opacity-80 hover:opacity-100 backdrop-blur-sm"
          >
            <ChevronRight size={24} className="md:size-30" />
          </button>
        </div> */

        {/* --- Indicators (Dots - Mixed shape style applied) --- */}
        {/* Placed at bottom-10 for separation from the stats section below */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex items-center justify-center space-x-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                // aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${ // Ensures all indicators are vertically centered and rounded
                  i === current 
                    ? 'w-8 bg-orange-500' // Active: Wide pill/bar
                    : 'w-2 bg-white/50'    // Inactive: Small round dot
                } focus:outline-none`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
