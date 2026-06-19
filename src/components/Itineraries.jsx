import React from 'react';

export default function Itineraries() {
    const routes = [
        {
            title: "Golden Triangle Tour",
            duration: "4 Days / 3 Nights",
            route: "Delhi — Agra — Jaipur",
            price: "₹11,999",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop", // Taj Mahal / Agra
            tag: "Best Seller"
        },
        {
            title: "Devbhoomi Chardham Yatra",
            duration: "10 Days / 9 Nights",
            route: "Haridwar — Yamunotri — Gangotri — Kedarnath — Badrinath",
            price: "₹24,999",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop", // Himalayas / Kedarnath spiritual vibe
            tag: "Spiritual Tour"
        },
        {
            title: "Royal Rajasthan Heritage",
            duration: "7 Days / 6 Nights",
            route: "Jaipur — Jodhpur — Udaipur — Jaisalmer",
            price: "₹18,500",
            image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600&auto=format&fit=crop", // Rajasthan Forts
            tag: "Culture & Royalty"
        },
        {
            title: "Serene Kerala Backwaters",
            duration: "5 Days / 4 Nights",
            route: "Cochin — Munnar — Alleppey — Kovalam",
            price: "₹14,200",
            image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop", // Kerala Houseboat
            tag: "Trending"
        }
    ];

    return (
        <section id="itineraries" className="py-20 bg-stone-950 text-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-widest text-amber-200 uppercase block mb-3">
                        Ready-Made Packages
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-500 font-black tracking-tight mb-4">
                        Explore Popular Itineraries
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-stone-400  leading-relaxed text-xl sm:text-lg">
                        Pick from our most-loved, time-tested itineraries or use them as a starting point to build your custom private route.
                    </p>
                </div>

                {/* Responsive Grid Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {routes.map((tour, idx) => (
                        <div
                            key={idx}
                            className="bg-stone-900/40 rounded-3xl overflow-hidden border border-stone-800/80 hover:border-amber-500/50 shadow-xl group transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Image Frame with Badge */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out brightness-95"
                                />
                                <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-md shadow-md">
                                    {tour.tag}
                                </div>
                                <div className="absolute bottom-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 border border-stone-800">
                                    ⏱️ {tour.duration}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold font-serif text-white tracking-tight group-hover:text-amber-400 transition-colors">
                                        {tour.title}
                                    </h3>

                                    {/* Visual Route Path Map Representation */}
                                    <div className="mt-3 flex items-start gap-2">
                                        <span className="text-stone-500 text-sm mt-0.5">📍</span>
                                        <p className="text-stone-400 text-md leading-relaxed">
                                            {tour.route}
                                        </p>
                                    </div>
                                </div>

                                {/* Price & Action Strip */}
                                <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-stone-500 block uppercase tracking-wider font-semibold">Starting From</span>
                                        <span className="text-lg font-black text-amber-400">{tour.price}</span>
                                    </div>

                                    <a
                                        href="#contact"
                                        className="bg-stone-800 group-hover:bg-amber-500 text-stone-300 group-hover:text-stone-950 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-1.5"
                                    >
                                        Details <span>→</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Global CTA Hooking Back to Form Section */}
                <div className="mt-16 text-center">
                    <p className="text-stone-400 text-xl mb-4">
                        Don't see your dream route listed here? No worries at all.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold px-8 py-3.5 rounded-full text-xl shadow-lg shadow-orange-500/10 hover:scale-105 transition-all duration-300"
                    >
                        🗺️ Customize Your Own Itinerary
                    </a>
                </div>

            </div>
        </section>
    );
}