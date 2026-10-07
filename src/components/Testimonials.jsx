import React, { useRef, useEffect } from 'react';
import { testimonialsData } from '../data/testimonialsData.jsx';

const Testimonials = () => {
    const scrollContainerRef = useRef(null);

    // Seamless Infinite Auto Slide Effect
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            if (container) {
                const firstCard = container.children[0];
                if (!firstCard) return;
                
                // Card ki exact width + gap (24px) calculate karte hain
                const cardWidth = firstCard.offsetWidth + 24;

                // Jab scroll aadhay raste (original list ke end) par pahuch jaye, toh instant wapas zero par le aao (seamless reset)
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    // Agle card par smooth scroll karo
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 3500); // 3.5 seconds mein auto slide hoga

        return () => clearInterval(interval);
    }, []);

    // Data ko double kar rahe hain taaki infinite seamless loop ban sake
    const infiniteTestimonials = [...testimonialsData, ...testimonialsData];

    return (
        <section className="w-full bg-[#fafafa] py-20 font-sans overflow-hidden">
            <div className="gm-container">

                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    
                    {/* Left Side: Green Line and Titles */}
                    <div className="flex gap-4">
                        <div className="w-[3px] bg-[#34a853] shrink-0 self-stretch rounded-full"></div>

                        <div className="flex flex-col justify-center">
                            <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-2">
                                WHAT OUR AGENCY PARTNERS SAY
                            </p>
                            <h2 className="text-3xl md:text-[38px] font-extrabold text-black leading-tight tracking-tight">
                                Real Partnerships. Real Growth.
                            </h2>
                        </div>
                    </div>

                    {/* Right Side: View All Services Link */}
                    <div className="shrink-0">
                        <a href="#" className="text-[#22c55e] text-[15px] font-bold hover:text-green-600 flex items-center gap-1.5 transition-colors group">
                            View All Services
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2.2} 
                                stroke="currentColor" 
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Sliding Testimonial Cards Container (Infinite Loop) */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {infiniteTestimonials.map((item, index) => (
                        <div 
                            key={`${item.id}-${index}`} 
                            className="snap-start bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-7 flex flex-row items-start gap-5 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-[0_12px_30px_rgba(34,197,94,0.08)] transition-all duration-300 shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
                        >
                            {/* Left Side: Avatar with Hover Zoom */}
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0 mt-0.5 group-hover:border-green-400 transition-colors">
                                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>

                            {/* Right Side: Content (Stars, Review, Author) */}
                            <div className="flex flex-col flex-1">
                                {/* 5 Yellow Stars */}
                                <div className="flex gap-1 text-[#facc15] mb-3">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review Paragraph */}
                                <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                                    {item.review}
                                </p>

                                {/* Author Details */}
                                <div className="mt-auto">
                                    <h4 className="text-[17px] font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-[14px] text-gray-500 mt-0.5">
                                        {item.role}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;