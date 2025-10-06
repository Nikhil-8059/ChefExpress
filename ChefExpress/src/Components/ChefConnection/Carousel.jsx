import React, { useState, useEffect, useCallback, useRef } from 'react';

//--- Carousel Data (Using Hindi Text and Image URLs for Background) ---
const slides = [
  {
    id: 1,
    title: "समाज का नज़रिया बदलें",
    subtitle: "देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।",
    buttonText: "ChefKart से जुड़ें",
    imageUrl: "https://github.com/Nikhil-8059/ChefExpress/blob/main/ChefExpress/public/images/chef.png?raw=true",
  },
  {
    id: 2,
    title: "हुनर से पैसे कमाएँ।",
    subtitle: "अपने खाना बनाने की प्रतिभा को एक नई शुरुआत दें और इसके माध्यम से पैसे कमाएँ।",
    buttonText: "ChefKart से जुड़ें",
    imageUrl: "https://github.com/Nikhil-8059/ChefExpress/blob/main/ChefExpress/public/images/chef2.png?raw=true",
  },
  {
    id: 3,
    title: "ChefKart का हिस्सा बनें",
    subtitle: "हमसे जुड़े 4500 से भी ज़्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएँ।",
    buttonText: "ChefKart से जुड़ें",
    imageUrl: "https://github.com/Nikhil-8059/ChefExpress/blob/main/ChefExpress/public/images/chefgroup.png?raw=true",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  //State for drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const carouselRef = useRef(null);
  
  //Define drag threshold (20% of screen width for a valid swipe)
  const SWIPE_THRESHOLD_PERCENT = 0.1;

  //Navigate to the previous slide
  const prev = useCallback(() => {
    setCurrent(current => (current === 0 ? slides.length - 1 : current - 1));
  }, []);

  //Navigate to the next slide
  const next = useCallback(() => {
    setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
  }, []);

  //Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    //Cleanup: Stop auto-play when the component is unmounted
    return () => clearInterval(slideInterval);
  }, [next]);
  
  //--- Drag/Swipe Handlers (Consolidated Mouse and Touch) ---
  
  const getClientX = (e) => {
      //Use clientX for mouse events, or the first touch point's clientX for touch events
      return e.clientX || (e.touches && e.touches[0].clientX) || (e.changedTouches && e.changedTouches[0].clientX) || 0;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(getClientX(e));
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    //Get ending X position from mouse or touch event
    const dragEndX = getClientX(e.nativeEvent);
    const dragDistance = dragEndX - dragStartX;
    
    //Determine required swipe threshold based on 10% of container width
    const carouselWidth = carouselRef.current ? carouselRef.current.offsetWidth : 0;
    const swipeThreshold = carouselWidth * SWIPE_THRESHOLD_PERCENT; 

    //Check if the drag was far enough to count as a swipe
    if (Math.abs(dragDistance) > swipeThreshold) {
      if (dragDistance > 0) {
        //Positive distance means swipe right (Previous slide)
        prev();
      } else {
        //Negative distance means swipe left (Next slide)
        next();
      }
    }
  };

  
  const handleMove = (e) => {
    if(e.touches) e.preventDefault(); //Keep touch move prevention to stop vertical scrolling on touch devices
  }


  return (
    
    <div 
      ref={carouselRef}
      className="relative w-full overflow-hidden" 
      
      //MOUSE HANDLERS
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleMove} //Simplified mouse move to prevent default if needed
      
      //TOUCH HANDLERS (CRITICAL FOR MOBILE SWIPING)
      onTouchStart={handleDragStart}
      onTouchMove={handleMove}
      onTouchEnd={handleDragEnd}
      
      
    >
      
      {/* --- Carousel Track --- */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div 
              className={`relative h-[50vh] sm:h-[70vh] md:h-[90vh] text-white bg-cover bg-center`}
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
              //Simplified dot click handler
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full h-2 ${ 
                i === current 
                  ? 'w-8 bg-orange-500' //Active: Wide pill/bar
                  : 'w-2 bg-white/50'    //Inactive: Small round dot
              } focus:outline-none`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
