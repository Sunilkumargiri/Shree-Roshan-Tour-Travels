import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        destination: '',
        guests: '1-3',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `Hi Shree Roshan Tours, I want to book a trip!\n\n` +
            `👤 Name: ${formData.name}\n` +
            `📞 Phone: ${formData.phone}\n` +
            `📍 Destination: ${formData.destination}\n` +
            `👥 Guests: ${formData.guests}\n` +
            `✉️ Message: ${formData.message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/919756039715?text=${encodedMessage}`, '_blank');
    };

    return (
        // Fixed: Changed text color to white globally for the dark background canvas
        <section id="contact" className="py-20 bg-stone-950 text-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-widest text-amber-500 uppercase block mb-3">
                        Plan Your Journey
                    </span>
                    {/* Fixed: Big heading set to brilliant golden palette */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4 text-amber-400">
                        Get In Touch With Us
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
                    {/* Fixed: Subtext adjusted to clean high-visibility stone-400 */}
                    <p className="text-stone-400  leading-relaxed text-base sm:text-lg">
                        Have questions about routes, vehicle availability, or pricing? Fill out the form or reach out directly via call or WhatsApp. We respond within 15 minutes!
                    </p>
                </div>

                {/* Responsive Dual Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Column 1: Contact Quick Information (Integrated Dark Card) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-stone-900/50 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-xl space-y-8 border border-stone-800">
                            <div>
                                <h3 className="text-2xl font-serif font-bold tracking-tight text-amber-400 mb-2">
                                    Shree Roshan Tours & Travels
                                </h3>
                                <p className="text-stone-400  text-md">
                                    Reliable and trusted travel solutions across India.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone Link */}
                                <a
                                    href="tel:9756039715"
                                    className="flex items-center gap-4 group p-3 -m-3 rounded-2xl hover:bg-white/5 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all">
                                        📞
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Call Directly</p>
                                        <p className="text-base sm:text-lg font-bold text-stone-200 group-hover:text-amber-400 transition-colors">+91 9756039715</p>
                                    </div>
                                </a>

                                {/* WhatsApp Link */}
                                <a
                                    href="https://wa.me/919756039715"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group p-3 -m-3 rounded-2xl hover:bg-white/5 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        {/* WhatsApp SVG Icon */}
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.031 6.173c-3.219 0-5.836 2.617-5.836 5.836 0 1.03.267 2.03.77 2.916l-.82 2.997 3.067-.805a5.833 5.833 0 0 0 2.819.72h.001c3.22 0 5.836-2.616 5.836-5.835s-2.617-5.836-5.836-5.836zm0 10.665c-.947 0-1.874-.254-2.684-.734l-1.923.504.514-1.875a5.815 5.815 0 0 1-.806-2.936c0-3.22 2.617-5.836 5.836-5.836s5.836 2.617 5.836 5.836-2.617 5.836-5.835 5.836zm3.187-4.37c-.173-.087-1.025-.506-1.183-.564-.158-.058-.273-.087-.389.088-.115.174-.448.564-.549.68-.1.116-.201.13-.374.043-.173-.087-.73-.269-1.391-.861-.514-.457-.862-1.021-.963-1.194-.101-.173-.01-.267.075-.353.078-.077.174-.202.26-.303.087-.101.116-.173.174-.289.058-.116.029-.217-.014-.303-.043-.086-.389-.939-.533-1.285-.143-.346-.289-.303-.389-.303-.1-.001-.215-.001-.331-.001-.115 0-.303.043-.461.231-.158.188-.604.59-.604 1.439 0 .848.618 1.668.704 1.784.086.116 1.218 1.86 2.948 2.608.411.177.733.282.984.361.414.131.79.113 1.087.068.331-.051 1.025-.418 1.169-.821.144-.403.144-.748.101-.821-.044-.074-.158-.116-.331-.203z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Instant Chat</p>
                                        <p className="text-base sm:text-lg font-bold text-stone-200 group-hover:text-emerald-400 transition-colors">WhatsApp Support</p>
                                    </div>
                                </a>

                                {/* Office Location */}
                                <div className="flex items-center gap-4 p-3 -m-3">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl text-blue-400 border border-blue-500/20">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Main Hub</p>
                                        <p className="text-sm sm:text-base text-stone-300 font-semibold leading-snug">Available Pan-India Booking Services</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-stone-800">
                                <p className="text-xs text-amber-500/80 font-bold uppercase tracking-widest text-center">
                                    ✨ 24/7 Roadside Assistance Available
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Pure White Form Block (Matches style of previous components) */}
                    <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-stone-800">
                        {/* Dark form heading text for extreme contrast inside the white block */}
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-6 tracking-tight">
                            Request a Free Travel Quote
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Rahul Sharma"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 text-sm transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="e.g. 9876543210"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 text-sm transition-all"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Target Destination</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Manali, Taj Mahal, Goa"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 text-sm transition-all"
                                        value={formData.destination}
                                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Total Guests</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 text-sm transition-all"
                                        value={formData.guests}
                                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    >
                                        <option value="1-3">1 - 3 Passengers (Swift)</option>
                                        <option value="4-7">4 - 7 Passengers (Innova / Ertiga)</option>
                                        <option value="8-16">8 - 16 Passengers (Tempo Traveller)</option>
                                        <option value="16+">16+ Passengers (Deluxe Bus)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Special Requirements (Optional)</label>
                                <textarea
                                    rows="3"
                                    placeholder="Tell us about your trip timeline, custom pickup locations, or specific route preferences..."
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 text-sm transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3.5 rounded-xl text-sm tracking-wide shadow-lg shadow-orange-500/20 hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                🚀 Send Inquiry via WhatsApp
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}