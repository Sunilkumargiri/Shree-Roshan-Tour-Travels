import React, { useState, useEffect } from 'react';

export default function TravelHero() {
  // Curated imagery and lines highlighting iconic Indian destinations
  const slides = [
    {
      url: "/Images/Taj_Mahal.png",  // Clean string path
      tagline: "Incredible India awaits",
      headline: "Discover Timeless Wonders & Royal Legacies",
    },
    {
      url: "/Images/Nature.png",
      tagline: "Tropical Paradises",
      headline: "Cruise Through Serene Tropical Backwaters",
    },
    {
      url: "/Images/Kila.png",
      tagline: "Majestic Heritage",
      headline: "Explore Golden Deserts & Historic Forts",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide loop every 5 seconds for a relaxed travel feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 seconds for a more leisurely pace

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div id="home" className="relative h-screen -mt-16 w-full overflow-hidden bg-stone-950 flex items-center justify-center">

      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-40 z-10' : 'opacity-0 z-0'
            }`}
        >
          <img
            src={slide.url}
            alt={slide.tagline}
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover object-center image-render-crisp"
          />
        </div>
      ))}

      {/* Warm gradient overlay matching heritage palettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />

      {/* Main Copy & Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8">

        {/* Destination Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md text-amber-400 text-xs md:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-amber-500/30 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
          {slides[currentIndex].tagline}
        </div>

        {/* Catchy Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-stone-100 tracking-tight leading-tight mb-6 min-h-[120px] sm:min-h-[auto]">
          {slides[currentIndex].headline.split(' ').map((word, i, arr) => {
            // Give the last two words a beautiful luxury gold/amber gradient
            if (i >= arr.length - 2) {
              return <span key={i} className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"> {word}</span>;
            }
            return <span key={i}> {word}</span>;
          })}
        </h1>

        {/* Supporting Hook Line */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-300 mb-10 font-light leading-relaxed">
          From the snow-capped peaks of the Himalayas to the golden shores of Kerala. Experience curated, luxury journeys tailored perfectly around India's richest cultures.
        </p>

        {/* Interactive Travel Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact">
            <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 px-8 py-3.5 rounded-xl font-bold shadow-xl shadow-orange-500/10 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-300">
              Book Private Tour
            </button>
          </a>
          {/* Fixed: Changed #Itineraries to #itineraries */}
          <a href="#itineraries">
            <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 px-8 py-3.5 rounded-xl font-bold shadow-xl shadow-orange-500/10 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-300">
              Explore Itineraries
            </button>
          </a>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-10 bg-amber-400' : 'w-2 bg-stone-600 hover:bg-stone-400'
              }`}
            aria-label={`View destination ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}