import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        // Fixed: Removed border-t and ensured deep stone-950 background consistency
        <footer className="bg-stone-950 text-stone-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Matrix Grid - Removed border-b */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">

                    {/* Column 1: Brand Pitch (4 Cols wide) */}
                    <div className="lg:col-span-4 space-y-5">
                        {/* Made main footer logo title larger and more premium */}
                        <h3 className="text-3xl font-serif font-black tracking-tight text-amber-400">
                            Shree Roshan
                            <span className="block text-sm font-sans tracking-widest font-bold uppercase text-amber-400 mt-1.5">
                                Tours & Travels
                            </span>
                        </h3>
                        {/* Increased paragraph text to text-base (larger reading size) */}
                        <p className="text-base leading-relaxed text-stone-400 max-w-sm">
                            Your trusted travel companion across India. We deliver seamless fleet logistics, curated tour itineraries, and premium passenger safety 24/7.
                        </p>
                        {/* Trust badge tweaked to match your application's input field styles */}
                        <div className="inline-flex items-center gap-2.5 bg-stone-900/60 border border-stone-800 px-4.5 py-2 rounded-xl text-sm text-stone-200 shadow-md">
                            <span className="text-emerald-500 animate-pulse">●</span> Verified Pan-India Operator
                        </div>
                    </div>

                    {/* Column 2: Navigation Links (2.5 Cols wide) */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Increased section tag heading weights */}
                        <h4 className="text-sm font-bold text-stone-100 uppercase tracking-widest">
                            Quick Links
                        </h4>
                        {/* Increased link list sizing to text-base */}
                        <ul className="space-y-3.5 text-base">
                            <li>
                                <a href="#about" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 block">About Fleet</a>
                            </li>
                            <li>
                                <a href="#services" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 block">Our Services</a>
                            </li>
                            <li>
                                <a href="#itineraries" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 block">Tour Packages</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-stone-400 hover:text-amber-400 transition-colors duration-200 block">Get a Quote</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Featured Destinations (3.5 Cols wide) */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-sm font-bold text-stone-100 uppercase tracking-widest">
                            Top Destinations
                        </h4>
                        {/* Shifted targets layout to text-base for enhanced visual hierarchy */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-base text-stone-400 font-light">
                            <a href="#contact" className="hover:text-amber-400 transition-colors">📍 Chardham Yatra</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors">📍 Rajasthan Royal</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors">📍 Golden Triangle</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors">📍 Kerala Serene</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors">📍 Manali Heights</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors">📍 Goa Beaches</a>
                        </div>
                    </div>

                    {/* Column 4: Contact Core Details (2.5 Cols wide) */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-sm font-bold text-stone-100 uppercase tracking-widest">
                            Support Desk
                        </h4>
                        <div className="space-y-4 text-base">
                            {/* Made direct telephone link bigger and bolder */}
                            <a href="tel:9756039715" className="flex items-center gap-2.5 group text-stone-100 font-bold text-lg hover:text-amber-400 transition-colors">
                                <span className="text-xl">📞</span> +91 9756039715
                            </a>
                            <a
                                href="https://wa.me/919756039715"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                            >
                                {/* Official Brand WhatsApp SVG Icon */}
                                <svg
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.641-1.024-5.125-2.887-6.991C16.576 1.884 14.1 .856 11.457.855 6.022.855 1.6 5.267 1.597 10.721c-.001 1.705.461 3.371 1.339 4.83l-.995 3.635 3.713-.973zm11.233-5.305c-.321-.161-1.9-.938-2.193-1.044-.293-.106-.507-.161-.72.161-.213.321-.826 1.044-1.013 1.258-.187.213-.373.241-.694.08-3.213-1.603-5.266-4.312-5.952-5.495-.32-.55.241-.476.784-1.424.116-.201.058-.377-.029-.538-.087-.161-.72-1.733-.987-2.376-.26-.625-.526-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.402-.293.321-1.12 1.096-1.12 2.673 0 1.578 1.147 3.1 1.307 3.315.16.213 2.257 3.447 5.468 4.832 2.53 1.093 3.414 1.11 4.636.929.68-.101 2.083-.85 2.376-1.671.293-.822.293-1.528.204-1.671-.088-.143-.32-.242-.641-.403z" />
                                </svg>
                                <span>Instant WhatsApp Chat</span>
                            </a >
                            <div className="text-sm text-stone-400 pt-2 space-y-1">
                                <p className="font-bold uppercase text-xs tracking-wider text-stone-500">Operating Hours:</p>
                                <p className="text-base text-stone-300">Mon — Sun: 24 Hours Available</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Utility Copyright Strip */}
                <div className="pt-8 border-t border-stone-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-l text-stone-500  tracking-wide">
                    <p>© {currentYear} Shree Roshan Tours & Travels. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#contact" className="hover:text-stone-400 transition-colors">Terms of Service</a>
                        <a href="#contact" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}