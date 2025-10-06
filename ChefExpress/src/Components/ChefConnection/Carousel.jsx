import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- Carousel Data (Using Hindi Text and Image URLs for Background) ---
const slides = [
  {
    id: 1,
    title: "समाज का नज़रिया बदलें",
    subtitle: "देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।",
    buttonText: "ChefKart से जुड़ें",
    imageUrl: "https://placehold.co/1200x900/1e293b/ffffff?text=Chef+in+Kitchen+Background+1",
  },
  {
    id: 2,
    title: "हुनर से पैसे कमाएँ।",
    subtitle: "अपने खाना बनाने की प्रतिभा को एक नई शुरुआत दें और इसके माध्यम से पैसे कमाएँ।",
    buttonText: "ChefKart से जुड़ें",
    imageUrl: "https://placehold.co/1200x900/365314/ffffff?text=Chef+Cooking+Background+2",
  },
  {
    id: 3,
    title: "ChefKart का हिस्सा बनें",
    subtitle: "हमसे जुड़े 4500 से भी ज़्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएँ।",
    buttonText: "ChefKart से जुड़ें",
    imageUrl: "https://placehold.co/1200x900/831843/ffffff?text=Chef+Team+Background+3",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Navigate to the next slide (used for both button click and auto-play)
  const next = useCallback(() => {
    setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
  }, []);

  // Auto-slide functionality (Simplified)
  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    // Cleanup: Stop auto-play when the component is unmounted
    return () => clearInterval(slideInterval);
  }, [next]);
  
  // --- END OF CORE LOGIC ---

  return (
    <div 
      // Removed all complex mouse/touch handlers and ref={carouselRef}
      className="relative w-full overflow-hidden" 
    >
      
      {/* --- Carousel Track --- */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div 
              className={`relative h-[50vh] sm:h-[70vh] md:h-[90vh] text-white bg-cover bg-center transition-opacity duration-1000`}
              style={{ 
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundColor: 'rgb(24 24 27)', 
              }}
            >
              
              {/* --- Dark Gradient Overlay --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

              {/* --- Content Area (Text and Button) --- */}
              <div className="absolute inset-0 w-full flex flex-col justify-center items-start p-6 sm:p-12 lg:p-20">
                <div className="max-w-xl text-left"> 
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <button 
                    // Simple click handler remains
                    onClick={() => console.log(`Button clicked for slide ${slide.id}`)}
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

      {/* --- Indicators (Dots - Manual Navigation) --- */}
      <div className="absolute bottom-10 left-0 right-0">
        <div className="flex items-center justify-center space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              // Simple direct navigation logic
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full h-2 ${ 
                i === current 
                  ? 'w-8 bg-orange-500' // Active: Wide pill/bar
                  : 'w-2 bg-white/50'    // Inactive: Small round dot
              } focus:outline-none`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
