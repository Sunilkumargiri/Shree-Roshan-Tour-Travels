import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Close mobile menu automatically if the screen resizes past the desktop breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        // Fixed: Styled with sticky positioning, a premium frosted dark glass theme, and removed borders
        <nav className="sticky top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Fixed: Bumped row heights up to h-20 to cleanly accommodate your branding layouts */}
                <div className="flex items-center justify-between h-20 gap-4">

                    {/* Logo Area */}
                    <div className="flex-shrink-0 min-w-0">
                        <div className="flex items-center gap-3">
                            <img
                                src="/Images/logo.png"
                                alt="Shree Roshan Tours & Travels Logo"
                                // Fixed: Adjusted heights cleanly to fit the h-20 bounding layout box
                                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                            {/* Fixed: Fully fluid typographic layout scales down beautifully on mobile devices */}
                            <h1 className="text-base sm:text-xl lg:text-2xl font-black font-serif text-amber-500 tracking-wide truncate">
                                Shree Roshan Tours & Travels
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-3 items-center flex-shrink-0">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                // Fixed: Included optimal horizontal/vertical paddings so pill backgrounds look incredible
                                className="px-5 py-2 text-sm bg-amber-500 rounded-full font-bold text-stone-950 hover:bg-amber-400 hover:scale-[1.02] active:scale-95 shadow-md shadow-amber-500/10 transition-all duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden flex items-center flex-shrink-0">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            // Fixed: Flipped toggle icon color lines to match text-white parameters
                            className="text-white hover:text-amber-400 focus:outline-none p-2 rounded-xl bg-stone-900 border border-stone-800 transition-colors duration-300 z-50 relative"
                            aria-label="Toggle Menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    className="transition-all duration-300 origin-center"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d={isOpen ? "M6 18L18 6" : "M4 6h16"}
                                />
                                <path
                                    className={`transition-all duration-300 origin-center ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M4 12h16"
                                />
                                <path
                                    className="transition-all duration-300 origin-center"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d={isOpen ? "M6 6l12 12" : "M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Sliding Drawer */}
            <div
                className={`fixed inset-y-0 right-0 w-64 bg-stone-950 border-l border-stone-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-40 pt-24 flex flex-col px-4 space-y-3.5 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-stone-300 hover:text-amber-400 pl-4 border-l-2 border-transparent hover:border-amber-400 transition-all duration-200"
                    >
                        {item}
                    </a>
                ))}
                <a 
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white mx-2 py-3 rounded-full text-center font-bold text-sm tracking-wide shadow-lg shadow-orange-500/10 active:scale-95 transition-all mt-6"
                >
                    Get a Free Quote
                </a>
            </div>

            {/* Mobile Menu Overlay Background */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden z-30 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            ></div>
        </nav>
    );
}