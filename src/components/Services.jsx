import React from 'react';

export default function Services() {
  const servicesList = [
    {
      icon: "🗺️",
      title: "Customized Tour Packages",
      description: "From the golden deserts of Rajasthan to the serene backwaters of Kerala, we design tailor-made itineraries that match your exact pace, budget, and travel dreams."
    },
    {
      icon: "🚘",
      title: "Premium Fleet Rentals",
      description: "Get door-to-door comfort with our verified personal cabs (Swift, Innova, Scorpio) or massive group transits. Perfect for local sightseeing or outstation journeys."
    },
    {
      icon: "✨",
      title: "Chauffeur-Driven Experience",
      description: "Travel stress-free with our highly experienced, polite, and route-expert local drivers who prioritize your safety, comfort, and time above everything else."
    },
    {
      icon: "🏨",
      title: "Hotel & Stay Bookings",
      description: "We partner with top-rated luxury resorts, heritage hotels, and cozy homestays across India to ensure you get best-in-class hospitality at exclusive rates."
    }
  ];

  return (
    // Fixed: Set text-white, removed the border entirely to blend with your dark theme layout
    <section id="services" className="py-20 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Fixed: Shifted to a glowing amber typography */}
          <span className="text-md font-bold tracking-widest text-amber-500 uppercase block mb-3">
            What We Excel In
          </span>
          {/* Fixed: Large display header turned gold */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4 text-amber-400">
            Our Premium Travel Services
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          {/* Fixed: Upgraded body description visibility */}
          <p className="text-stone-400  leading-relaxed text-base sm:text-lg">
            We handle all the heavy lifting of travel planning so you can focus completely on making lifelong memories with your loved ones.
          </p>
        </div>

        {/* Services Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              // Fixed: Transformed cards to premium dark-glass blocks (bg-stone-900/40) with thin glowing amber borders on hover
              className="bg-stone-900/40 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-stone-800/80 hover:border-amber-500/50 hover:bg-stone-900/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Dynamic Icon Badge */}
                {/* Fixed: Icon container defaults to a subtle dark frame that turns fully gold on card hover */}
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-stone-700 group-hover:scale-110 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-md transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>

                {/* Service Title */}
                {/* Fixed: Text properties changed to look premium against dark glass backgrounds */}
                <h3 className="text-xl font-bold font-serif text-stone-100 mb-3 tracking-tight group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                {/* Fixed: High visibility text-stone-400 font */}
                <p className="text-stone-400  text-md sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative Arrow Link */}
              {/* Fixed: Swapped internal line break border to fit a cohesive dark aesthetic */}
              <div className="pt-6 mt-4 border-t border-stone-800/80 flex justify-end">
                <span className="text-amber-400 font-bold text-sm transform opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Book Now →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Call to Action Banner */}
        {/* Fixed: Banner background updated to stand out crisply within the stone-950 landscape */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 via-stone-900 to-stone-850 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-amber-400">
              Looking for a custom holiday itinerary?
            </h4>
            <p className="text-stone-400 text-sm sm:text-base ">
              Tell us your destination, budget, and days—we will build the perfect package for you.
            </p>
          </div>
          <a 
            href="#contact" 
            className="whitespace-nowrap bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold px-8 py-3.5 rounded-full text-sm tracking-wide shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}