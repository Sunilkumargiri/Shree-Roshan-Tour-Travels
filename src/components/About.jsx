import React, { useState, useEffect } from 'react';

export default function About() {
  const categories = [
    {
      title: "Personal Luxury Cabs",
      description: "Enjoy a private, premium travel experience across India with our top-tier, well-maintained fleet. Perfect for families, corporate trips, and solo adventures.",
      fleet: ["Maruti Swift", "Maruti Ertiga", "Mahindra Scorpio", "Toyota Innova Crysta"],
      images: [
        "Images/Ertiga.jpg", 
        "Images/swift.jpg",
        "Images/Scorpio.jpg",
        "Images/Innova.jpg"
      ],
      badge: "Private & Comfortable"
    },
    {
      title: "Shared & Group Transport",
      description: "Traveling with a large group? Save money and travel together with our spacious shared vehicles. Perfectly designed for long-distance group tours and family events.",
      fleet: ["Luxury Tempo Travellers", "AC Deluxe Tour Buses", "Non-AC Economy Buses"],
      images: [
        "Images/Tempo.jpg",
        "Images/NonAcBus.jpg",
        "Images/AcBus.jpg"
      ],
      badge: "Spacious & Cost-Effective"
    }
  ];

  return (
    // Fixed: Updated to bg-stone-950 background, changed global text to white, removed top border
    <section id="about" className="py-20 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Fixed: Shifted to amber-500 typography */}
          <span className="text-sm font-bold tracking-widest text-amber-500 uppercase block mb-3">
            Who We Are
          </span>
          {/* Fixed: Big heading set to amber-400 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4 text-amber-400">
            Your Trusted Travel Partner in India
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          {/* Fixed: Adjusted subtext color to clean stone-400 */}
          <p className="text-stone-400  leading-relaxed text-base sm:text-lg">
            At <strong className="text-stone-200 font-semibold">Shree Roshan Tours & Travels</strong>, we don't just move people—we create unforgettable journeys. Whether you need a swift private ride or a massive luxury bus, we have you covered.
          </p>
        </div>

        {/* Fleet Grid Content Container */}
        <div className="space-y-20 lg:space-y-28">
          {categories.map((cat, idx) => (
            <FleetRow key={idx} cat={cat} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component to manage independent auto-sliding loops for each section
function FleetRow({ cat, idx }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % cat.images.length);
    }, 4500);

    return () => clearInterval(slideTimer);
  }, [cat.images.length]);

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Auto-Sliding Image Frame */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300 opacity-20"></div>
        {/* Fixed: Set border matching the deep dark aesthetic styles */}
        <div className="relative h-72 sm:h-96 overflow-hidden rounded-3xl shadow-2xl border border-stone-800 bg-stone-900">
          
          {/* Loop and render all slides cleanly */}
          {cat.images.map((imgUrl, imgIdx) => (
            <img 
              key={imgIdx}
              src={imgUrl} 
              alt={`${cat.title} slide ${imgIdx}`} 
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
                imgIdx === currentImgIdx ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-105 invisible'
              }`}
            />
          ))}

          {/* Floating Static Indicator Badge */}
          <div className="absolute top-4 left-4 z-20 bg-stone-950/90 backdrop-blur-md text-amber-400 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/30">
            {cat.badge}
          </div>

          {/* Mini Slide Dots Indicators */}
          <div className="absolute bottom-4 right-4 z-20 flex space-x-1.5 bg-stone-950/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {cat.images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentImgIdx(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === currentImgIdx ? 'w-4 bg-amber-400' : 'w-1.5 bg-stone-500'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Text Content Details */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Fixed: Header updated to look high-contrast white */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 tracking-tight">
          {cat.title}
        </h3>
        {/* Fixed: Body descriptive font shifted to clear stone-400 gray */}
        <p className="text-stone-400  leading-relaxed text-md sm:text-lg">
          {cat.description}
        </p>

        {/* Dynamic Fleet Vehicle Tags */}
        <div>
          {/* Fixed: Label modified to fit dark amber layout specifications */}
          <h4 className="text-xs font-bold text-amber-500/80 uppercase tracking-wider mb-3">
            Available Fleet Options:
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {cat.fleet.map((vehicle, i) => (
              <span 
                key={i} 
                // Fixed: Transformed badges into dark-glass cards that cleanly match your dynamic Services blocks
                className="bg-stone-900/60 backdrop-blur-sm text-stone-200 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md border border-stone-800 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-200"
              >
                🚘 {vehicle}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Connection Line */}
        <div className="pt-4">
          {/* Fixed: Styled link to anchor beautifully with amber-400 typography links */}
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors group text-sm sm:text-base"
          >
            Check Route & Availability 
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>

    </div>
  );
}